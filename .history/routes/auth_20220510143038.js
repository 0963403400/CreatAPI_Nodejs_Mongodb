const express=require('express')
const router=express.Router()
const User=require('../models/auth')

router.get('/',async(req,res)=>{
    try{
        const user=await User.find()
        res.json(user)
    }
    catch(err)
    {
        res.send(err)
    }
})

router.post('/',async(req,res)=>{
    const user= new User({
        UserName: req.body.UserName,
        PassWord: req.body.passWord,
        fullName: req.body.fullName,
        // DateOfBirth: req.body.DateOfBirth
    }   )
    try{
        const a1=await user.save()
        res.json(a1)
    }
    catch(err)
    {
        res.send(err)
    }
})
module.exports=router