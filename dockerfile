FROM node

WORKDIR /developer/nodejs/crypto-service

COPY . .
    
EXPOSE 3000

RUN npm ci 

CMD ["npm","run","dev"]