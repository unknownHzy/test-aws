FROM node:18.3.0-alpine

# Create app directory，容器启动起来后的工作目录
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

CMD [ "node", "server.js" ]
EXPOSE 8080
