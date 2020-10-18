FROM node:10
# Create app directory
WORKDIR .
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
RUN npm install
# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]