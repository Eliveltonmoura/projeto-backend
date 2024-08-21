const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('digital_college', 'eli', '123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;