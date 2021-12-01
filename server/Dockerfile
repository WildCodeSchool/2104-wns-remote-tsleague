FROM node:16-alpine3.12

RUN mkdir /server
WORKDIR /server

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY tsconfig.json ./
COPY src src

CMD yarn start