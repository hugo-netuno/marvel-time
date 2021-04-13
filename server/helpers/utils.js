const jwt = require('jsonwebtoken');
const User = require('../models/user');

const getter = (data) => {
  const element = data;
  return element;
};

const validateEmail = (email) => {
  const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return reg.test(email.toString().toLowerCase());
};

const checkEmail = async (email) => User
  .findOne({ where: { email } })
  .then(true)
  .catch((e) => console.error(e.message));

const generateToken = (email) => jwt.sign(email, 'token');

const verifyToken = (email) => jwt.verify(email, 'token');

module.exports = {
  checkEmail,
  getter,
  validateEmail,
  generateToken,
  verifyToken,
};
