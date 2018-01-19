FROM node:8-alpine

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh

RUN npm install -g serverless@1.25.0

COPY ./deploy.sh /bin/
