const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt = require("bcryptjs");
const User = require("../models/user");


// Load Input Validation
const validateRegisterInput = require("../validate");


// @route   POST /register
// @desc    Register user
// @access  Public
//{
// "email":"xx",
// "name":"xx",
// "education":"xx"
// }
router.post('/api/register',async (req,res)=>
{
 console.log("register api") 
const response= validateRegisterInput.registerValidation(req.body);
    //check Validation
    if(response.error)
    {
    
        return res.status(400).json(response.error.details[0]['message'])
    
    }    
    try {
    console.log("ID...user")  
    const { name, email , education } = req.body
    const user = new User({name,email,education});
    await user.save()
    const token = await jwt.sign({ id: '45' }, 'abc');
    user.token =token
    await user.save()
   
    res.status(201).send('User added with ID')
    }catch (e) {
      res.status(400).send(e)
  }

})

module.exports = router;