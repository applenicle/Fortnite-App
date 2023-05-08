FROM node:16-alpine
WORKDIR /opt/app
COPY package*.json ./
RUN yarn install
COPY . .
ENV NODE_ENV production
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]