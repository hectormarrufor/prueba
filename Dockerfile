FROM node:18.9.1

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY next.config.js ./

CMD [ "yarn", "dev" ]