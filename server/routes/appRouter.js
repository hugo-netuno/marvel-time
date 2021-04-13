const express = require('express');

const middlewares = require('../middlewares');
const controllers = require('../controllers');

const appRouter = express.Router();

appRouter.post('/user', middlewares.createUserValidation, controllers.createUser);
appRouter.post('/login', middlewares.loginValidation);

module.exports = appRouter;
