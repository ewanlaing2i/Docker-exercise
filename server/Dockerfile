FROM node:current-alpine3.13


WORKDIR /app
COPY . /app
RUN npm install


COPY . .

EXPOSE 9000

CMD [ "node", "server.js" ]