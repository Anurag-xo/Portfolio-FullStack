#Dockerfile

# author: Anuragxo

# light weight node.js runtime base image
FROM node:18-alpine

# Set the working directory inside container
WORKDIR src/

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the appliction code
EXPOSE 3000

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership of app directory
RUN chown -R nextjs:nodejs src/
USER nextjs

# CMD to run the application
CMD ["npm", "run", "dev"]

