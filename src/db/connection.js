const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.CONNECT_URL);
try {
   sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
  module.exports=sequelize

