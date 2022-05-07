const http = require("http");

const routes = require("./routes");
// const rqListener = (req, res) => {
// }

//request listener is a function that will be triggered
//for any incoming requests
const server = http.createServer((req, res) => {
  routes.handler;
});

//start a process to listen for incoming reqs
server.listen(3000);
