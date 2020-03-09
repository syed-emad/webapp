const mongoose = require("mongoose");

const UserTypeSchema = new mongoose.Schema({
  user_type:{
      type:Number,
      required: true
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("UserType", UserTypeSchema);
