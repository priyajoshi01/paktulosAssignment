const User=require('../models/user')

module.exports=async function createUser(name,email,education)
{
   try {
        const existing=await User.findOne({where:{email:email}})
        if(existing)
        throw new Error("User already existed")
        //create user
        const user =await User.create({name,email,education});
        await user.save()
  return{
    User:user
  }
        }catch (e) {
          res.status(400).send(e)
      }



}