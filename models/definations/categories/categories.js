const datatypes = require("sequelize");
const sequelize = require("../../../common/dbconnection");

const Categories = sequelize.define(
  "categories",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: datatypes.INTEGER,
    },
    description: {
      type: datatypes.STRING,
    },
    categoryname: {
      allowNull: false,
      type: datatypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Categories;
