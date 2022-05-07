const http = require("http");

const routes = require("./routes");

const server = http.createServer(
  routes.handler
  //here default as page not found
);

server.listen(3000);
