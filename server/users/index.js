/* eslint-disable no-console */
const express = require('express');
const User = require('./user');

const app = express();
module.exports = app;

// Fetch all users
app.get('/v1/users', (req, res) => {
  User.find({}, 'username shopName shopId', (error, users) => {
    if (error) {
      console.error(error);
    }
    res.send({ users });
  }).sort({ _id: -1 });
});

// Create a new user
app.post('/v1/users', (req, res) => {
  const { username, shopName, shopId } = req.body;
  const newUser = new User({
    username,
    shopName,
    shopId,
  });

  newUser.save((error) => {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: 'User saved successfully!',
    });
  });
});
