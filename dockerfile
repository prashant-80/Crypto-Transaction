FROM node

WORKDIR /developer/nodejs/crypto-service

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]