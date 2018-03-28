const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: String,
  shop_name: String,
  shop_id: Number,
});
const User = mongoose.model('User', UserSchema);

module.exports = User;
