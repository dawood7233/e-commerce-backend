// const { models }= require("../models/index");
const user = require('../models/definations/users/users')
const bcrypt = require('bcrypt')
module.exports = {
    getuser: async (data) => {
      const result = await models.user.findAll();
      return result;
    },
    createuser: async (data) => {
      const saltRound = 10;
      data.password= bcrypt.hashSync(data.password,saltRound)
      const result = await models.user.create(data);
      console.log(result);
      return result;
    }
}  