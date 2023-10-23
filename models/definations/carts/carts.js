const datatypes = require("sequelize");
const sequelize = require("../../../common/dbconnection");

const Carts = sequelize.define(
  "Carts",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: datatypes.INTEGER,
    },
    quantity: {
      allowNull: true,
      type: datatypes.INTEGER,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Carts;
