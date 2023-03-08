FROM node:lts-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM nginx:alpine
ENV NODE_ENV=production
RUN rm -r /usr/share/nginx/html/*
COPY --from=build --chown=nginx:nginx /app/build /usr/share/nginx/html