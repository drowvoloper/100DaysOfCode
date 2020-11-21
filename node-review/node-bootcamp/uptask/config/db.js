const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('uptasknode', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  }); 

module.exports = sequelize;