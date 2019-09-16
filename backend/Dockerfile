FROM node:10.13-alpine
ENV NODE_ENV production
RUN mkdir -p /app

WORKDIR /app
ADD . /app

RUN npm install --production --silent

EXPOSE 8001
CMD npm run dev