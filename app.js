const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const index = require("./server/routes/index");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/craftlabs';

mongoose.connect(uri).then(
  () => {
    console.log('Succeeded connected to: ' + uri);
  },
  (err) => {
    console.log('ERROR connecting to: ' + uri + '. ' + err);
  }
);

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// create middleware to handle the serving the app
app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.use(index);

const User = require('./server/models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Catch all routes and redirect to the index file
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port);
console.log(`Server started on port ${port}`);
