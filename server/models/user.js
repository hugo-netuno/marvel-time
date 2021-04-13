const { DataTypes } = require("sequelize");

const sequelize = require("./sequel");

const User = sequelize.define("User", {
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

//create table if not exists...
const init = async () => {
  await User.sync();
};

init();

module.exports = User;
