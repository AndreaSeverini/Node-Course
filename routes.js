const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
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
  if (url === "/message" && method === "POST") {
    const body = [];
    //listen to events
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302; //redirection
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  //write some data
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from NODE.JS SERVER</h1></body>");
  res.write("</html>");

  res.end();
};

module.exports = {
  handler: requestHandler,
  text: "hardcoded text",
};

//EQUIVALENT
// module.exports.handler = requestHandler;
// module.exports.text = "hardcoded text";

//SHORTCUT
// exports.handler = requestHandler;
// exports.text = "hardcoded text";
