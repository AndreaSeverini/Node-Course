const http = require("http");

// const rqListener = (req, res) => {
// }

//request listener is a function that will be triggered
//for any incoming requests
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //process.exit();

  res.setHeader("Content-Type", "text/html");
  //write some data
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from NODE.JS SERVER</h1></body>");
  res.write("</html>");

  res.end();
});

//start a process to listen for incoming reqs
server.listen(3000);
