
FROM node:14

# copy the package.json to install dependencies
COPY package*.json ./

WORKDIR /app

RUN npm install

COPY . .

# Build the project and copy the files.
RUN npm build


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY /app/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

