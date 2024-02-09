FROM node:current-alpine AS base

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

# OIDC details
# redirectURI = 'http://localhost/home';
# Azure set redirect URI to 'http://localhost/home' not with port 3000 ????????
EXPOSE 80

CMD ["pnpm", "start"]