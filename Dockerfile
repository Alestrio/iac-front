# étape de build

FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json yarn.lock /app/

RUN apk add --no-cache git

RUN yarn cache clean

RUN yarn install --pure-lockfile --network-timeout 1000000

COPY . .

RUN yarn build

# étape de production

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]