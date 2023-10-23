var express = require("express");
var router = express.Router();
const usersController = require("../controller/users/usersController");
const authenticationController = require("../controller/common/authenticationController");
/* GET users listing. */
router.get("/", usersController.getuser);
// router.get("/", authenticationController.get);
router.post("/createUser", usersController.createuser);

module.exports = router;
