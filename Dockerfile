FROM node:14.20.1-alpine as BUILD

# yarn 설치
RUN npm install -g yarn --force
WORKDIR /app

COPY package.json .
COPY yarn.lock .

COPY package.json ./app

RUN yarn config set "strict-ssl" false -g
RUN yarn set version berry

COPY . .
RUN rm -rf node_modules
RUN rm -rf package-lock.json

RUN yarn install

RUN yarn build

FROM node:14.20.1-alpine
EXPOSE 3000

WORKDIR /app

COPY --from=BUILD /app/ .

ENTRYPOINT ["yarn", "start"]
