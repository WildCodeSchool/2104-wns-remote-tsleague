# Dockerfile - Client
FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
RUN yarn install

COPY src src
COPY public public

CMD yarn start
