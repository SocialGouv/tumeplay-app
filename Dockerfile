FROM node:12-alpine as builder

WORKDIR /

COPY *.json ./
COPY *.js ./
COPY *.lock ./

RUN npm install

RUN sed -i.bak 's/module.exports = /export default /g' node_modules/react-native-device-info/src/web/index.js && sed -i.bak 's/module.exports=/export default /g' node_modules/react-native-device-info/lib/module/web/index.js && rm node_modules/react-native-device-info/src/web/index.js.bak
                 
RUN npm run build

COPY src ./src
COPY public ./public

FROM docker.pkg.github.com/socialgouv/docker/nginx4spa:0.18.0

COPY --from=builder /build /usr/share/nginx/html

ENV NGINX_PORT=80
