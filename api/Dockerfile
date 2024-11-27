FROM node:18-alpine

WORKDIR /api

COPY package.json package-lock.json yarn.lock ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3005

CMD ["npm", "run", "dev"]
