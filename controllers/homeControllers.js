const homeControllers = (req, res, next) => {
  res.render("home");
  next();
};

module.exports = homeControllers;
