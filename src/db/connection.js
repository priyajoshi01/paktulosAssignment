const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:db@123@localhost/first_database');
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports=sequelize