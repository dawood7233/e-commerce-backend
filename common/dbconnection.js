const config = require('../config')
const {Sequelize} = require('sequelize');

let database = new  Sequelize(config.db);

database.authenticate().then(()=>{
    console.log("Database is connected successfully");

}).catch((err) =>{
    console.log(err);
});

module.exports = database;