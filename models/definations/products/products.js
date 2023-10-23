const datatypes = require('sequelize');
const sequelize = require('../../../common/dbconnection');

const Products = sequelize.define('products',{
    id:{
        autoIncrement: true,
        primaryKey:true,
        type: datatypes.INTEGER
    },
    productname:{
        allowNull: false,
        type: datatypes.STRING
    },
    productcategory:{
        allowNull: false,
        type: datatypes.STRING,
    },

},{
    timestamps:true,
    paranoid:true,
    sequelize,
})
module.exports=Products;
