// server.js
// load the things we need
const express = require("express");
const app = express();

const port = 8090;

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file
app.get("/", function(_, res) {
  res.render("pages/index");
});

app.get("/about", function(_, res) {
  res.render("pages/about");
});

app.listen(port);
console.log(`Web server running and listening to post -> ${port}`);
