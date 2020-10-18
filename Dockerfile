FROM node:10
# Create app directory
WORKDIR .
# Install app dependencies 
# where available (npm@5+)
RUN npm install
# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]