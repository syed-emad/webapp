const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

//User model
const User = require("../models/Users");

//Login page
router.get("/login", (req, res) => res.render("login"));

//Login page
router.get("/register", (req, res) => res.render("register"));

//Register handle
router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  //Check Required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please Fill all fields" });
  }
  //Check passwordnom
  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  //Check pass length
  if (password.length < 6) {
    errors.push({ msg: "Password should be atlest 6 characters" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        //User exists
        errors.push({ msg: "Email  already register" });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name: name,
          email,
          password
        });
        //console.log(newUser);
        //res.send("hello");
        //Hash password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //Set
            newUser.password = hash;
            //Save
            newUser
              .save()
              .then(user => {
                req.flash("success_msg", "You are now registered & can login");
                res.redirect("/users/login");
              })
              .catch(err => console.log(err));
          })
        );
      }
    });
  }
});

<<<<<<< HEAD
=======
//Login Handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true
  })(req, res, next);
});
>>>>>>> parent of 5f53b75... Login System Complete
module.exports = router;
