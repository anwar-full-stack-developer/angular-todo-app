const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Todo = new Schema({
    task: {
    type: String
  },
  details: {
    type: String
  },
  status: {
    type: String
  }
}, {
  collection: 'todos'
})
module.exports = mongoose.model('Todo', Todo)