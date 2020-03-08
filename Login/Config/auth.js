module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error_msg", "Pleas log in to view this resourcse");
    res.redirect("/users/login");
  }
};
