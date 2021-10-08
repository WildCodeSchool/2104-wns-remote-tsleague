#!/bin/sh
echo "PORT=$PORT"
echo "SERVER_STAGE=$SERVER_STAGE"
git fetch origin && git reset --hard origin/dev && git clean -f -d
GATEWAY_PORT=$PORT SERVER_STAGE=$SERVER_STAGE docker-compose -f docker-compose.prod.yml up --build -d
