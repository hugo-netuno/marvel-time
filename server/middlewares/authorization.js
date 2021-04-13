const { verifyToken } = require('../helpers/utils');
const validationErrors = require('../helpers/validationErrors');

const authorization = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    const err = validationErrors.requiredTokenError();
    return res.status(err.status).json(err);
  }
  try {
    verifyToken(token);
    return next();
  } catch (error) {
    const err = validationErrors.invalidTokenError();
    return res.status(err.status).json(err);
  }
};

module.exports = authorization;
