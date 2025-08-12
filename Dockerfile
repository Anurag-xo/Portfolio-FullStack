# ---------- Base Stage ----------
FROM node:18-alpine AS base
# Install system dependencies that might be needed for Node.js native modules
# libc6-compat is often needed in Alpine for compatibility
RUN apk add --no-cache libc6-compat
WORKDIR /app
# Copy dependency definitions first to leverage Docker layer caching
# Copy package-lock.json for npm
COPY package.json package-lock.json* ./


# ---------- Dependencies Stage ----------
FROM base AS deps
# Install all dependencies (including dev dependencies needed for build)
# Using ci ensures the lockfile isn't updated and is consistent
RUN npm ci


# ---------- Builder Stage ----------
FROM deps AS builder
# Copy the rest of the application source code
COPY . .

# Set environment variables for build
# Provide a dummy value for RESEND_API_KEY to prevent build errors related to missing env vars
# The actual API key should be provided at runtime via docker run -e
ENV RESEND_API_KEY=placeholder_for_build_process_only_DO_NOT_USE_IN_PRODUCTION
ENV NEXT_TELEMETRY_DISABLED=1
# Build the Next.js application for production
# This creates the .next directory with the optimized build
RUN npm run build


# ---------- Runner Stage ----------
# Use a minimal base image for the final stage
FROM node:18-alpine AS runner
WORKDIR /app

# Create a non-root user and group for security best practices
# -S creates a system user/group
# -G assigns the user to the specified group (create the group first)
# -D creates the user without a password
# First, create the group
RUN addgroup -S -g 1001 nodejs
# Then, create the user, assign the primary group using -G, and set the UID with -u
RUN adduser -S -u 1001 -G nodejs nextjs

# Set environment variables for runtime
# NEXT_TELEMETRY_DISABLED prevents Next.js from sending telemetry data
ENV NEXT_TELEMETRY_DISABLED=1
# NODE_ENV is crucial for Next.js to know it's running in production
ENV NODE_ENV=production
# RESEND_API_KEY will need to be provided at runtime

# Copy necessary files from the builder stage
# 1. Copy public assets
COPY --from=builder /app/public ./public
# 2. Copy the built .next directory (contains the application build)
COPY --from=builder /app/.next/ ./.next

# Copy package files again for installing production dependencies in this stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json* ./

# Install only production dependencies
# npm ci with --only=production or --omit=dev installs only prod deps
RUN npm ci --only=production

# Change ownership of the necessary directories to the non-root user
# Use the primary group (nodejs) for group ownership
RUN chown -R nextjs:nodejs /app/.next
RUN chown -R nextjs:nodejs /app/public
RUN chown -R nextjs:nodejs /app/node_modules

# Switch to the non-root user
USER nextjs

# Expose the port the app runs on (Next.js default is 3000)
EXPOSE 3000

# Specify the command to run the application in production
# Make sure to pass the real RESEND_API_KEY when running the container
CMD ["npm", "start"]
