const sequelize = require('../db/connection');
const Sequelize=require('sequelize')
const User = sequelize.define('user', {
    name: {
    
    type: Sequelize.STRING,
    allowNull: false
    
    },
    
    email: {
    
    type: Sequelize.STRING,
    allowNull: false

},
education: {
    
    type: Sequelize.STRING,
    allowNull: false

},
    token: {
        type: Sequelize.STRING
    }


});


User.sync({ force: true })
module.exports =User