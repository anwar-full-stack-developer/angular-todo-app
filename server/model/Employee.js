const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Employee = new Schema({
  id:  {
    type: String
  },
  ssn:  {
    type: String
  },
  firstName:  {
    type: String
  },
  lastName:  {
    type: String
  },
  address:  {
    type: String
  },
  state:  {
    type: String
  },
  zipcode:  {
    type: String
  },
  country:  {
    type: String
  }

}, {
  collection: 'employies'
})
module.exports = mongoose.model('Employee', Employee)