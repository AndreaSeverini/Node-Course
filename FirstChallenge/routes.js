const requestHandler2 = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Welcome PAge</title></head>");
    res.write("<body><h1>Hello to My PAGE</h1>");
    res.write("<div></div>");
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Send</button></form>"
    );
    res.write("</body></html>");
    //return to not continue outside the if
    res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Welcome PAge</title></head>");
    res.write("<body><ul>");
    res.write("<li>USER - 1</li>");
    res.write("<li>USER - 2</li>");
    res.write("<li>USER - 3</li>");
    res.write("</ul></body>");
    res.write("</html>");
    //return to not continue outside the if
    res.end();
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
};

module.exports = { handler: requestHandler2, text: "ghghg" };
