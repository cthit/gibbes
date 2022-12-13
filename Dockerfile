# Dockerfile

# base image
FROM node:alpine

RUN apk update
RUN apk add python3
RUN apk add py3-pip
RUN pip install requests
RUN pip install bs4

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

COPY kebab-cron /etc/cron.d/kebab-cron

RUN python3 data/update_data.py

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start
