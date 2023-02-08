# The first stage
# Build React static files
ARG NODE_VERSION=16.19.0-alpine3.16

# the image we want to use
FROM node:${NODE_VERSION} as build
LABEL maintainer="mutuakennedy.crunchgarage.com"

WORKDIR /app/frontend
COPY ./react/package.json ./
COPY ./react/package-lock.json ./
RUN npm install react-scripts@5.0.1 -g --silent && npm ci --legacy-peer-deps
COPY ./react/ ./
RUN  npm run build

# The second stage
# Copy React static files and start nginx
FROM nginxinc/nginx-unprivileged:1-alpine


# Copy React static files
COPY --from=build /app/frontend/build /usr/share/nginx/html
# Copy script with commands on how to run nginx
COPY ./services/nginx/run.sh /run.sh

# Change to root user who has full rights
USER root

# Install certbot and nginc-certbot plugin to manage ssl
RUN apk add --no-cache certbot && apk add certbot-nginx

RUN \
    # Create directories where we will collect static and media files
    mkdir -p /vol/static && \ 
    mkdir -p /vol/media && \
    # Update folder permisions for static and media files so nginx can use them
    chmod 755 /vol/static && \
    chmod 755 /vol/media && \
    chmod +x /run.sh

VOLUME /vol/static
VOLUME /vol/media

CMD ["/run.sh"]