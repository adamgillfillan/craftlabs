/* eslint-disable no-console,no-underscore-dangle */
const express = require('express');
const User = require('../models/user');

const app = express();
module.exports = app;

app.post('/v1/addshop', (req, res) => {
  const userId = req.user._id;
  const shopName = req.body.shopName;

  User.findById(userId, (error, user) => {
    if (error) {
      res.send({ error });
    }

    user.set({ shopName });
    user.save((err, updatedUser) => {
      if (error) {
        res.send({ error });
      }

      res.send(updatedUser);
    });
  });
});
