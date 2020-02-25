const express = require("express");
const router = express.Router();

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
  //Check password
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
    res.send("pass");
  }
});

module.exports = router;
