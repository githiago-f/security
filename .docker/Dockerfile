FROM node:16.13-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# in this case im setting the root of the applications
WORKDIR /usr/src/apps

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm
RUN pnpm install

COPY . .
