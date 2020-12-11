const Sequilize = require('sequelize');

const sequilize = require('../util/database');

const User = sequilize.define('user', {
  id: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequilize.STRING,
    allowNull: false,
  },
});

module.exports = User;
