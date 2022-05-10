const express = require('express')
const app=express()
const mongoose=require('mongoose')
// app.use('/posts',()=>{
//     console.log("Nguyen Huy TUan");
// })

// app.get('/',(req,res)=>{
//     res.send("we are on home");
// });
// app.get('/posts',(req,res)=>{
//     res.send("Hello Tuan");
// })

// app.listen(3000);

const url = "mongodb://localhost/mydb"

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',()=>{
    console.log('connected...')
})

app.use(express.json())

const AuthRouter=require('./routes/auth')
app.use('/auth',AuthRouter)
app.listen(3000,()=>{
    console.log('Server started')
})