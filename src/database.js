const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('digital_college', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;