FROM node:16 as builder

WORKDIR '/app'

COPY package.json ./

RUN npm install --frozen-lockfile 

COPY . .

RUN npm run install


FROM nginx:latest

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html
