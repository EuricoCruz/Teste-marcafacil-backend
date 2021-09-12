FROM node:latest
COPY . /node/merafacil
WORKDIR /node/mercafacil 
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000