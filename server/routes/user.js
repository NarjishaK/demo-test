var express = require('express');
var router = express.Router();
var userController =require('../controller/usercontroller')

router.post("/",userController.users);
router.get("/update",userController.update);
router.get("/edituser/:id",userController.edituser);
router.put("/updateuser/:id",userController.updateuser)
module.exports =router;