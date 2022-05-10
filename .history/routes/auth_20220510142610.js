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

router.post('/',async(req,res){
    const user= new User{
        UserName: req.body.UserName,
        passWord: req.body.passWord,

    }
    try{
        const user=await User.find()
        res.json(user)
    }
    catch(err)
    {
        res.send(err)
    }
})
module.exports=router