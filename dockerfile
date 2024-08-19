FROM node:20
WORKDIR /user/app

# COPY package.json package-lock.json turbo.json ./
COPY ..  ./

RUN npm install

RUN npm run build


EXPOSE 3000

CMD [ "npm","run" ,"start-user-app"]