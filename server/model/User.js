const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = new Schema({
  id:  {
    type: String
  },
  username:  {
    type: String
  },
  password:  {
    type: String
  },
  firstName:  {
    type: String
  },
  lastName:  {
    type: String
  },
  token:  {
    type: String
  },

}, {
  collection: 'users'
})
module.exports = mongoose.model('User', User)