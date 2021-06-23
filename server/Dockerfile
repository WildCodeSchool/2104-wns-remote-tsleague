FROM node:alpine

RUN mkdir /server
WORKDIR /server

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn install

COPY src src

CMD yarn start