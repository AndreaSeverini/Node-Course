const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

//initialize app
const app = express();

//defining MIDDLEWARE

//accetps array of request handlers
//next is a function you can pass
//and if executed it jumps the code to next middleware
// app.use((req, res, next) => {
//   console.log("In the middleware");
//   next();
// });

//parser Middleware
//it triggers next() after parsing
app.use(bodyParser.urlencoded({ extended: false }));

//first because if you not call next() you will not go in next middleware
app.use("/add-product", (req, res, next) => {
  console.log("In a middleware");
  //from express, easier way
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button>Add Product</button></form>"
  );
});

// app.post or get is the same as use but it filters for methods
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //from express, easier way
  res.send("<h1>Hello From Express</h1>");
});

//app is like an handler
//const server = http.createServer(app);
//server.listen(3000);

// --> SHORTCUT
app.listen(3000);
