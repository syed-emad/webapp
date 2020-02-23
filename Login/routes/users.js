const express = require("express");
const router = express.Router();

//Login page
router.get("/login", (req, res) => res.render("login"));

//Login page
router.get("/register", (req, res) => res.render("register"));

//Registe handle
router.post("/ register", (req, res) => {
  console.log(req.body);
  res.send("hello");
});

module.exports = router;
