var express = require('express');
var router = express.Router();
var userController =require('../controller/usercontroller')

router.post("/user",userController.users);
router.get("/user",userController.update)
module.exports =router;