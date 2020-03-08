const mongooes = require("mongoose");

const UserSchema = new moongoes.Schema({
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

<<<<<<< HEAD
<<<<<<< HEAD
const User = mongoose.model("User", UserSchema);
=======
const User = moongoes.model("User", UserSchema);
>>>>>>> parent of c8fa667... Connected to MONGOOS
=======
const User = moongoes.model("User", UserSchema);
>>>>>>> parent of c8fa667... Connected to MONGOOS

module.exports = User;
