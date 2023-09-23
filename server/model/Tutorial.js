const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Tutorial = new Schema({
    title: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  },
  published: {
   type : Boolean
  }
}, {
  collection: 'tutorials'
})
module.exports = mongoose.model('Tutorial', Tutorial)