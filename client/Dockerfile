FROM node:12.16.1-alpine as builder
WORKDIR /app
COPY . .
RUN npm install react-scripts -g --silent
RUN npm install
RUN npm run build

FROM node:12.16.1-alpine
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 8000
CMD ["serve", "-p", "8000", "-s", "."]