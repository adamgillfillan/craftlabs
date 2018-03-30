/* eslint-disable no-console */
const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const app = express();
module.exports = app;

// Create a new user
app.post('/v1/register', (req, res) => {
  console.log('lets register brah');
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      return res.status(409).send(err);
    }

    passport.authenticate('local')(req, res, () => {
      console.log('registering user: ', user);
      res.send({
        success: true,
        message: 'User registered successfully!',
      });
    });
  });
});

app.post('/v1/login', passport.authenticate('local'), (req, res) => {
  res.send({
    success: true,
    message: 'User logged in successfully!',
  });
});

app.get('/v1/logout', (req, res) => {
  req.logout();
  res.redirect('/');
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

// Create a new user
// app.post('/v1/users', (req, res) => {
//   const { username, shopName, shopId } = req.body;
//   const newUser = new User({
//     username,
//     shopName,
//     shopId,
//   });
//
//   newUser.save((error) => {
//     if (error) {
//       console.log(error);
//     }
//     res.send({
//       success: true,
//       message: 'User saved successfully!',
//     });
//   });
// });
