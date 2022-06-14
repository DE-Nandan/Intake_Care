import express from "express"
// const express = require("express") above can be done as
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/myDB" , 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
} , ()=>{
    console.log("DB connected")
})


const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const User = new mongoose.model("User",userSchema)


//Routes
app.post("/login",(req,res) => {
    const {email  ,password} = req.body
    // console.log(req.body)
    // console.log(req.body.email)
    User.findOne({email : email} , (err,user) =>{
        if(user)
        {
           if(password === user.password)
           res.send({message : "Login Sucessfull"  ,user})
           else
           {
               res.send({message:"Password didnt match"})
           }
        }
        else
        {
            res.send("User not registered")
        }
    })
})
app.post("/register",(req,res) => {
//    console.log(req.body)
//    console.log(mongoose.connection.readyState)


   const {name ,email ,password} = req.body
   User.findOne({email : email} , (err,user) =>{
       if(user){
           res.send({message:"user already registered"})
       }
           
       else{
       const user = new User({
            name,
            email,
            password
        })
        user.save(err =>{
            if(err){
                console.log("error")
                res.send(err)
            }
            else{
                res.send({message : "Successfully Registered , Please Login Now"})
            }
        })
    }
           
      
   })
   
})

app.listen(9002 , () => {
    console.log("BE started at port 9002")
})
