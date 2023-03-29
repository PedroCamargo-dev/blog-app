FROM alpine:3.14

WORKDIR /var/www/html
RUN apk update && apk add nodejs nodejs-dev yarn

COPY . .

ENV NODE_ENV=production

RUN yarn install

ENTRYPOINT [ "/bin/sh", "-c", "yarn build && yarn start" ]
