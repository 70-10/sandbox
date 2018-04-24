FROM node:8-alpine

RUN npm i -g aws-sdk cloudformation-z config
ENV NODE_PATH=/usr/local/lib/node_modules
WORKDIR /workspace
ENTRYPOINT ["npm","start"]
