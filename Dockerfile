FROM node:20-alpine

WORKDIR /app

RUN npm install -g pm2

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8094

CMD ["pm2-runtime", "index.js"]
