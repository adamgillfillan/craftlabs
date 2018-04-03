/* eslint-disable no-console,no-underscore-dangle */
const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const app = express();
module.exports = app;

// Create a new user
app.post('/v1/register', (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      return res.status(409).send(err);
    }

    passport.authenticate('local')(req, res, () => {
      res.send({
        user: {
          id: req.user._id,
          username: req.user.username,
        },
        success: true,
        message: 'User registered successfully!',
      });
    });
  });
});

app.post('/v1/login', passport.authenticate('local'), (req, res) => {
  res.send({
    user: {
      id: req.user._id,
      username: req.user.username,
    },
    success: true,
    message: 'User logged in successfully!',
  });
});

app.get('/v1/logout', (req, res) => {
  req.logout();
  res.send({
    success: true,
    message: 'User logged out successfully!',
  });
});

// Fetch all users
app.get('/v1/users', (req, res) => {
  User.find({}, 'username shopName shopId', (error, users) => {
    if (error) {
      console.error(error);
    }
    res.send({ users });
  }).sort({ _id: -1 });
});
