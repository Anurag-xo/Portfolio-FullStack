# ---------- Base Stage ----------
FROM node:18-alpine AS base
WORKDIR /app

# ---------- Dependencies Stage ----------
FROM base AS deps
# Copy only package files for better caching
COPY package*.json ./
# Use npm ci with cache mount for faster installs
RUN --mount=type=cache,target=/root/.npm \
    npm ci --only=production

# ---------- Dev Dependencies Stage ----------
FROM base AS deps-dev
COPY package*.json ./
# Install all dependencies including dev (needed for build)
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# ---------- Builder Stage ----------
FROM deps-dev AS builder
WORKDIR /app
# Copy source code
COPY . .
# Build with optimizations
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
# Use build cache mount and standalone output for smaller size
RUN --mount=type=cache,target=/app/.next/cache \
    npm run build

# ---------- Runner Stage ----------
FROM node:18-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only necessary files for production
# If using standalone mode (recommended), copy from .next/standalone
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

EXPOSE 3000

# Use node directly instead of npm start for better performance
CMD ["node", "server.js"]
