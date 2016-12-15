FROM mhart/alpine-node-auto
RUN mkdir Dockerfile
WORKDIR Dockerfile
COPY . .
RUN npm install -g json-server
CMD ["json-server","movieDetails.json"]

