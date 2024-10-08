const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User  = sequelize.define('user', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    userName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phoneNo:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
  })
  
  
  module.exports = User;