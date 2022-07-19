
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')

const userOne = {
    name: 'Mike',
    email: 'mike@example.com',
    education: 'mba',
    token:jwt.sign({ id: "23" }, "abc")
}
 
const setupDatabase = async () => {
    await new User(userOne).save()
}

module.exports = {
    userOne,
    setupDatabase
}