FROM node:16-alpine3.12

ARG DOTENVENC_KEY

RUN mkdir /server
WORKDIR /server

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY tsconfig.json ./
COPY src src
COPY .env.enc .env.enc

RUN echo $DOTENVENC_KEY
RUN DOCENVENC_KEY=$DOTENVENC_KEY

CMD yarn start