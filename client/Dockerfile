FROM node:16-alpine3.12

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN yarn install
RUN node -v

COPY tsconfig.json ./
COPY src src
COPY public public

CMD yarn start
