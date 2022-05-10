const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('Huy Tuan dep zai');
})
module.exports=router