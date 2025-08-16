# Step 1: Build the app using a Node image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Serve using nginx
FROM nginx:alpine

# Copy build output to nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy default nginx config
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
