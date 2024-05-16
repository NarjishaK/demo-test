const userModal = require('../models/usermodal');
const UserModal =require('../models/usermodal')
const asyncHandler =require("express-async-handler")

exports.users =asyncHandler(async(req,res)=>{
     const {username,phone,email,password}=req.body;
    try{
        const users =await UserModal.create({
            username:username,
            phone:phone,
            email:email,
            password:password,
        })
        if(users){
            res.send("success")
        }else{
            res.send("failed")
        }

    }catch(err){
        console.log(err);
        return res.status(400).json({err:'an error occured in'});
    }
})

exports.update =asyncHandler(async(req,res)=>{
    try{
        const user = await userModal.find()
        if(user){
            res.json({user})
        }else{
            return res.status(404).json({err:"user not found"})
        }
    }catch(err){
        console.log(err);
        return res.status(400).json({err:"an error occured"})
    }
})