const datatypes = require('sequelize');
const sequelize= require('../../../common/dbconnection');

const users= sequelize.define('users',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: datatypes.INTEGER
    }, 
    firstname:{
        allowNull: false,
        type: datatypes.STRING,
    },
    email:{
        allowNull: false,
        unique: true,
        type: datatypes.STRING,
        validate:{isEmail:true},
    },
    password:{
        allowNull: false,
        type: datatypes.STRING,
        

    },
    lastname:{
        allowNull: false,
        type: datatypes.STRING
    }

},{
    timestamps:true,
    paranoid:true,
    sequelize,
})
module.exports= users;