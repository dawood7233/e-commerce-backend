const { models } = require("../../models/index");
const bcrypt = require("bcrypt");
const config = require("../../config");
const user = require("../../models/definations/users/users");
function generateAccessToken(user) {
  return jwt.sign(user, "Fuck this assignment");
}
module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await models.user.findOne({
        where: {
          email: email,
        },
      });
      console.log(user);
      user = user.dataValues;
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateAccessToken({ email, password });
        tokens.push(token);
        res.json({ token: token });
      }
    } catch (e) {
      console.log(e);
    }
  },
};
