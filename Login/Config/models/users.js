const moongoes = require("mongoose");

const userschema = new moongoes.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = moongoes.model("user", userschema);

module.exports = User;
