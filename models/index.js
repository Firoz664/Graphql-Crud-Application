const sequelize = require('../config/db');
const {Sequelize,DataTypes}= require('sequelize')

const DataBase={}

DataBase.Sequelize=Sequelize;
DataBase.sequelize=sequelize

DataBase.sequelize.sync({force:false})
.then(()=>{
    console.log("DataBase re-connected Successfully")
})
DataBase.users=require('./Users')(sequelize,DataTypes)

module.exports=DataBase