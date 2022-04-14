FROM node

WORKDIR /usr/app

COPY package.json ./

COPY .env .env

RUN npm install

COPY . . 

EXPOSE 3000

EXPOSE 5432

CMD ["npm", "run", "start:dev"]