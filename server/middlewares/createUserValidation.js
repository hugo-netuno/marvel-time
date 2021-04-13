const { validateEmail, checkEmail } = require('../helpers/utils');
const validationErrors = require('../helpers/validationErrors');

const createUserValidation = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    const err = validationErrors.nameLengthError();
    return res.status(err.status).json(err);
  } if (!email) {
    const err = validationErrors.requiredEmailError();
    return res.status(err.status).json(err);
  } if (!validateEmail(email)) {
    const err = validationErrors.validEmailError();
    return res.status(err.status).json(err);
  } if (!password) {
    const err = validationErrors.requiredPasswordError();
    return res.status(err.status).json(err);
  } if (password.length < 6) {
    const err = validationErrors.passwordLengthError();
    return res.status(err.status).json(err);
  } if (await checkEmail(email)) {
    const err = validationErrors.userExistisError();
    return res.status(err.status).json(err);
  }
  return next();
};

module.exports = createUserValidation;
