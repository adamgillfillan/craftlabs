/* eslint-disable no-console,no-underscore-dangle */
const express = require('express');
const user = require('./user');
const shop = require('./shop');

const app = express();
module.exports = app;

app.use(user);
app.use(shop);
