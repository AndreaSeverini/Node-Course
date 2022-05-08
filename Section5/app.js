const http = require("http");

const express = require("express");

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

//first because if you not call next() you will not go in next middleware
app.use("/add-products", (req, res, next) => {
  console.log("In a middleware");
  //from express, easier way
  res.send("<h1>Add new Product</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In a middleware");
  //from express, easier way
  res.send("<h1>Hello From Express</h1>");
});

//app is like an handler
//const server = http.createServer(app);
//server.listen(3000);

// --> SHORTCUT
app.listen(3000);
