FROM node:18-buster-slim

WORKDIR /app

COPY package*.json /app
RUN npm ci

COPY . /app
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000
CMD ["node", "./dist/server/entry.mjs"]
