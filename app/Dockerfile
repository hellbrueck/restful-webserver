FROM node:slim

WORKDIR /app

ADD package.json /app/package.json
RUN npm install

ADD server.js /app/server.js

EXPOSE 8080
CMD node server.js