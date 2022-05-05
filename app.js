const http = require("http");

// const rqListener = (req, res) => {
// }

//request listener is a function that will be triggered
//for any incoming requests
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    //return to not continue outside the if
    return res.end();
  }

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
