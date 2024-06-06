FROM node:latest

ENV MONGODB_URL=mongodb+srv://Shavidika:shavi29924@cluster1.lgleyvj.mongodb.net/restaurant_manager?retryWrites=true&w=majority&appName=Cluster1

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]