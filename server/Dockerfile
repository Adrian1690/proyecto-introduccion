FROM node:12.16.1-alpine
WORKDIR /app
COPY . .
RUN npm install react-scripts -g --silent
RUN npm install

EXPOSE 4000
CMD ["npm", "run", "start"]