const nameLengthError = () => {
  const err = {};
  err.status = '400';
  err.message = '"displayName" length must be at least 8 characters long';
  return err;
};
const requiredEmailError = () => {
  const err = {};
  err.status = '400';
  err.message = '"email" is required';
  return err;
};
const validEmailError = () => {
  const err = {};
  err.status = '400';
  err.message = '"email" must be a valid email';
  return err;
};
const requiredPasswordError = () => {
  const err = {};
  err.status = '400';
  err.message = '"password" is required';
  return err;
};
const passwordLengthError = () => {
  const err = {};
  err.status = '400';
  err.message = '"password" length must be 6 characters long';
  return err;
};
const userExistisError = () => {
  const err = {};
  err.status = '409';
  err.message = 'User already exists';
  return err;
};
const emptyEmailError = () => {
  const err = {};
  err.status = '400';
  err.message = '"email" is not allowed to be empty';
  return err;
};
const emptyPasswordError = () => {
  const err = {};
  err.status = '400';
  err.message = '"password" is not allowed to be empty';
  return err;
};
const invalidDataError = () => {
  const err = {};
  err.status = '400';
  err.message = 'Invalid data';
  return err;
};
const requiredTokenError = () => {
  const err = {};
  err.status = '401';
  err.message = 'Token not found';
  return err;
};
const invalidTokenError = () => {
  const err = {};
  err.status = '401';
  err.message = 'invalid token';
  return err;
};
const userDoesNotExistsError = () => {
  const err = {};
  err.status = '404';
  err.message = 'User not found';
  return err;
};
const userError = () => {
  const err = {};
  err.status = '401';
  err.message = 'Unauthorized user';
  return err;
};
const invalidUserPasswordError = () => {
  const err = {};
  err.status = '401';
  err.message = 'Unauthorized user';
  return err;
};

module.exports = {
  nameLengthError,
  requiredEmailError,
  validEmailError,
  requiredPasswordError,
  passwordLengthError,
  userExistisError,
  emptyEmailError,
  emptyPasswordError,
  invalidDataError,
  requiredTokenError,
  invalidTokenError,
  userDoesNotExistsError,
  userError,
  invalidUserPasswordError,
};
