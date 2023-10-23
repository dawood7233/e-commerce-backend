const sequelize = require('../common/dbconnection');
const user = require('./definations/users/users');
const cart = require('./definations/carts/carts')





const models = sequelize.models;
console.log(models);
const db ={};
db.sequelize = sequelize;
module.exports = {db,models};