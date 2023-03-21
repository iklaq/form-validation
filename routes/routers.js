const express = require("express");
const formControllers = require("../controllers/formControllers");
const homeControllers = require("../controllers/homeControllers");
const router = express.Router();
const userDataControllers = require("../controllers/userDataControllers");


router.get("/", formControllers);
router.post("/", userDataControllers);
router.get("/home", homeControllers);

module.exports = router;
