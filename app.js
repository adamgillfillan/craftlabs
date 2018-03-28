const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const users = require("./server/users/index");
const app = express();

mongoose.connect("mongodb://localhost:27017/craftlabs");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", callback => {
  console.log("Connection Succeeded");
});

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

// create middleware to handle the serving the app
app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.use(users);

// Catch all routes and redirect to the index file
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

// Create default port to serve the app on
const port = process.env.PORT || 5000;

app.listen(port);
// Log to feedback that this is actually running
console.log(`Server started on port ${port}`);
