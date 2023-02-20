FROM node:lts-alpine3.17 AS Build
WORKDIR /home/node/
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine-perl
COPY --from=Build /home/node/dist /usr/share/nginx/html
EXPOSE 80
