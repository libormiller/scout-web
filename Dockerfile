FROM node:lts-alpine
EXPOSE 3000
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY ./build .
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
