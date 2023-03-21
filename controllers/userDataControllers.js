const userModel = require("../model/user-model");

const userDataControllers = async (req, res, next) => {
  console.log(req.body);
  const data = new userModel(req.body);
  await data
    .save()
    .then(() => {
      console.log("data stored successfully");
      res.redirect("/home");
    })
    .catch(() => {
      console.log("data does not stored");
    });
};

module.exports = userDataControllers;
