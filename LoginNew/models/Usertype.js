const mongoose = require('mongoose');

const UsertypeSchema = new mongoose.Schema({
 user_type: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
 
  date: {
    type: Date,
    default: Date.now
  }
});

const Usertype = mongoose.model('Usertype', UsertypeSchema);

module.exports = Usertype;
