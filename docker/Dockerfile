# pull official base image
FROM node:24-alpine

# make directory
RUN mkdir -p /app
RUN chmod -R 777 /app

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY node_modules ./
RUN npm install --legacy-peer-deps

# add app
COPY . ./
COPY .env ./
RUN ls -li
EXPOSE 4001

# start app
CMD ["npm", "start"]