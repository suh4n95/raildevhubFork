# Multi-stage build: build static assets with Node, serve with Nginx

FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy rest of the app and build
COPY . .
RUN npm run build


FROM nginx:1.27-alpine AS runner

# Replace default server config with SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built artifacts
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


