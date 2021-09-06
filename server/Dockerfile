FROM node:alpine

RUN mkdir /server
WORKDIR /server

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY tsconfig.json ./
COPY src src

CMD yarn start