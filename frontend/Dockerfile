FROM node:14.17 as builder

WORKDIR '/app'

COPY package.json ./

RUN npm install --production

COPY . .

RUN npm run build


FROM nginx:latest

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html
