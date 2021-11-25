FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

ENV REACT_APP_API_KEY=secrets.REACT_APP_API_KEY

RUN npm install -g serve

EXPOSE 3000

CMD serve -s build
