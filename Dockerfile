FROM node:20
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json .
RUN npm install --production
RUN npm install -g serve

COPY . .

RUN npm run build

CMD ["serve", "-l", "3000", "build"]
