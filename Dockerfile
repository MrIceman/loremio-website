# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
# install app dependencies
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

EXPOSE 3000
# start app
CMD ["npm", "start"]