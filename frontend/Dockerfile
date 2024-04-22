FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json .

COPY . .
EXPOSE 5173
RUN npm i
CMD ["npm", "run", "dev","--","--host","0.0.0.0"]
