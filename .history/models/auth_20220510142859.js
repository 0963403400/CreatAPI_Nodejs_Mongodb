const mongoose=require('mongoose')


const userSchema= new mongoose.Schema({
    UserName:{
        type:String,
        required:true
    },
    PassWord:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:false
    },
    DateOfBirth:{
        type:Date,
        required:false
    }

})

module.exports=mongoose.model('User',userSchema)