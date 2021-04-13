const User = require('../models/user');
const { generateToken } = require('../helpers/utils');

const createUser = (req, res, _next) => {
  const { displayName, email, password } = req.body;

  User.create({
    displayName,
    email,
    password,
  })
    .then((user) => {
      const token = generateToken(user.dataValues.email);
      return res.status(201).json({ token });
    })
    .catch((e) => {
      console.error(e.message);
      res.status(500).send({ message: 'Unkown error' });
    });
};

module.exports = createUser;
