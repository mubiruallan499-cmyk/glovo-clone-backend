# Base image
FROM node:20-alpine

# App directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Build NestJS
RUN npm run build

# App port
EXPOSE 3000

# Start server
CMD ["node", "dist/main.js"]
