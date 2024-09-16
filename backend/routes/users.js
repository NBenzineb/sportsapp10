const router = require('express').Router();
let User = require('../models/user');

const express = require("express");


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/add').post((req, res) => {
//   const username = req.body.username;
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;
  

//   const newUser = new User({
//     username,
//     name,
//     email,
//     password,
//   });

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.post("/login",(req,res)=>{
  const {email,password} =req.body;
  console.log(email)
  User.findone({email:email},(err,user)=>{
      if(user){
         if(password === user.password){
             res.send({message:"login sucess",user:user})
         }else{
             res.send({message:"wrong credentials"})
         }
      }else{
          res.send("not register")
      }
  })
});
router.post("/user/add",(req,res)=>{
  console.log(req.body) 
  const {username,name,email,password} =req.body;
  User.findOne({email:email},(err,user)=>{
      if(user){
          res.send({message:"user already exist"})
      }else {
          const user = new User({username,name,email,password})
          user.save(err=>{
              if(err){
                  res.send(err)
              }else{
                  res.send({message:"sucessfull"})
              }
          })
      }
  })


}) 
module.exports = router;