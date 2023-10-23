const UserServices = require('../../services/userServices')

module.exports = {
    getuser:async (req, res, next) => {
      const data = await UserServices.getuser(req.body);
      // res.send("respond with a resource");
      res.send(data);
    },
    createuser: async(req, res) => {
      console.log(req.body);
      const data =await UserServices.createuser(req.body);
      res.send(data);
    },
}