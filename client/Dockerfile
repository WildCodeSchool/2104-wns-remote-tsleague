# Dockerfile - Client
FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY src src
COPY public public

CMD yarn start
