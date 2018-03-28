const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const User = require("./server/models/user");
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

// Fetch all users
app.get("/v1/users", (req, res) => {
  User.find({}, "username shop_name shop_id", (error, users) => {
    if (error) {
      console.error(error);
    }
    res.send({ users });
  }).sort({ _id: -1 });
});

app.post("/v1/users", (req, res) => {
  const { username, shop_name, shop_id } = req.body;
  const newUser = new User({
    username,
    shop_name,
    shop_id
  });

  newUser.save(function(error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "User saved successfully!"
    });
  });
});

// Catch all routes and redirect to the index file
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

// Create default port to serve the app on
const port = process.env.PORT || 5000;

app.listen(port);
// Log to feedback that this is actually running
console.log(`Server started on port ${port}`);
