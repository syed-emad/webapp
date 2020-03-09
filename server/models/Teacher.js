const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const TeacherSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
    required:true
  },
  lastName: {
    type: String,
    default: "", 
    required:true
  },
  email: {
    type: String,
    default: "",
    required:true,
    unique: true
  },
  password: {
    type: String,
    default: "",
    required:true
  },
  DOB: {
    type: Date,
    default: ""
  },
  phone: {
    type: String,
    default: ""
  },
  NIC: {
    type: String,
    default: "",
    required:true
  },
  minCharges: {
    type: Number,
    default: ""
  },
  qualifications: {
    type: String,
    default: ""
  },
  profilepic: {
    type: String,
    default: ""
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  user_type:{
    type:Number,
    ref:"UserType"
  }
});

TeacherSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Teacher", TeacherSchema);
