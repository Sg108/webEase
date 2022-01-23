const router=require("express").Router()
// const { Router } = require("express")
const User=require("../models/User")
const bcrypt=require('bcrypt')
// const { createHmac } = require("crypto")

router.post("/register",async(req,res)=>{
    try{
     const salt=await bcrypt.genSalt(10)
     const hashed=await bcrypt.hash(req.body.password,salt)
       const newUser= new User({
           username:req.body.username,
           email:req.body.email,
           password:hashed
       })
    const user=await newUser.save()
    res.status(200).json(user)
    }catch(err){
      res.status(500).json(err)
    }
})
router.post("/login",async(req,res)=>{
    try{
      const userLogin=await User.findOne({username:req.body.username})
      if(!userLogin)
      {
         return res.status(400).json("wrong username")
      }
      const validation=await bcrypt.compare(req.body.password,userLogin.password)
      if(!validation)
      {
        return res.status(400).json("wrong password")
      } 
      res.status(200).json('login successfull') 
    }catch(err)
    {
        res.status(500).json(err)
    }
})
module.exports= router