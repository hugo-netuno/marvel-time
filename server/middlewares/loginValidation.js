const { checkEmail, generateToken } = require('../helpers/utils');
const validationErrors = require('../helpers/validationErrors');

const loginValidation = async (req, res) => {
  const { email, password } = req.body;
  if (email === undefined) {
    const err = validationErrors.requiredEmailError();
    return res.status(err.status).json(err);
  } if (password === undefined) {
    const err = validationErrors.requiredPasswordError();
    return res.status(err.status).json(err);
  } if (email === '') {
    const err = validationErrors.emptyEmailError();
    return res.status(err.status).json(err);
  } if (password === '') {
    const err = validationErrors.emptyPasswordError();
    return res.status(err.status).json(err);
  }
  const user = await checkEmail(email);
  if (!user) {
    const err = validationErrors.invalidDataError();
    return res.status(err.status).json(err);
  }
  if (password !== user.dataValues.password) {
    const err = validationErrors.invalidUserPasswordError();
    return res.status(err.status).json(err);
  }
  console.log('print', process.env);
  const token = generateToken(email);
  return res.status(200).json({ token });
};

module.exports = loginValidation;
