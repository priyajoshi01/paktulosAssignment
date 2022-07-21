const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const auth=require('../middleware/auth')
require('dotenv').config();
const createUser=require('../controllers/createUser')
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
const response= validateRegisterInput.registerValidation(req.body);
    //check Validation
    if(response.error)
    {
    
        return res.status(400).json(response.error.details[0]['message'])
    
    }    
    try {
    const { name, email , education } = req.body

    const user =await createUser(name,email,education);
    return user
    }catch (e) {
      res.status(400).send(e)
  }

})

router.get('/users/id',auth,async (req, res) => {
  
             const id = req.params.id;
             try {
             var user = await User.findOne({where:{id:id}});
             res.status(201).send({user})
             }catch(e)
             {
              res.status(400).send(e)
  
             }
       
  
})

module.exports = router;