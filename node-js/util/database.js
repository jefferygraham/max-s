const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('node-complete', 'root', 'P@t1ence', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
