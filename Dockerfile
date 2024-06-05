FROM node:latest

ENV MONGODB_URL=mongodb://mongo:27017/notes

WORKDIR /app

COPY backend/package*.json ./

RUN npm install

COPY backend/ .

EXPOSE 8000

CMD ["npm", "start"]