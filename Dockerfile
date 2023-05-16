FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx next build

EXPOSE 3000

CMD ["npm", "start"]
