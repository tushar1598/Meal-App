const jwt = require("jsonwebtoken");
const User = require("../models/user");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.secretKey, function (err, user) {
      if (err) {
        return res.send("<h2>You are not Authenticated!!</h2>");
      }
      User.findOne({ where: { email: user.email } })
        .then((user) => {
          req.user = user;
          next();
        })
        .catch((err) => console.log(err));
    });
  } else {
    return res.send("<h2>Something Went Wrong!!</h2>");
  }
};

module.exports = verifyToken;
