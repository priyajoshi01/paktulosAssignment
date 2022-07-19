
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')

const userOne = {
    name: 'Mike',
    email: 'mike@example.com',
    education: 'mba',
    token:jwt.sign({ id: "23" }, "abc")
}
 
const setupDatabase = async () => {
    const user= User.build({name:"priya",email:"a@gmail.com",education:"kkf"})
    console.log("saved")
    await user.save()
}

module.exports = {
    userOne,
    setupDatabase
}