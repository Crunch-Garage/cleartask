ARG NODE_VERSION=16.19.0-alpine3.16

# the image we want to use
FROM node:${NODE_VERSION}
LABEL maintainer="mutuakennedy.crunchgarage.com"

# Create our woking directory
RUN mkdir -p /frontend

# Set created directory as our working directory
WORKDIR /frontend

COPY package.json /frontend

RUN set -ex && \
    npm install --legacy-peer-deps && \
    npm install react-scripts@5.0.1 -g --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]