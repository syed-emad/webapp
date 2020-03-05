const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../Config/auth");
//Welcome
router.get("/", (req, res) => res.render("welcome user"));
//Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    name: req.user.name
  })
);
module.exports = router;
