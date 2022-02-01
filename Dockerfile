FROM node:14-slim AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /
# Cache and Install dependencies
COPY package.json .
RUN npm install --production
# Copy app files
COPY . .
#RUN mkdir build
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /build /usr/share/nginx/html
# Add your nginx.conf
COPY /container-files/etc/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]