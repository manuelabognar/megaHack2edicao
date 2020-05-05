FROM node:latest
RUN mkdir /backend_mega
COPY . /backend_mega
WORKDIR /backend_mega
RUN yarn install
ENTRYPOINT ["yarn", "run", "dev"]
EXPOSE 3333