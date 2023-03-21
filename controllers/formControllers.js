const formControllers = (req, res, next) => {
  res.render("form");
  next();
};

module.exports = formControllers;
