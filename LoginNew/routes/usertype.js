const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
// Load User model
const User = require("../models/Usertype");
const { forwardAuthenticated } = require("../config/auth");

router.post("/usertype/:user_type", (req,res,next)=>{
  passport.authenticate("local",
  {
    successRedirect: "/users/login",
    failureRedirect: "/usertype",
    failureFlash: true
  })(req, res, next);
});

router.get("/usertype:user_type", forwardAuthenticated, (req, res) =>
  res.render("register")
);

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true
  })(req, res, next);
});



module.exports = router;