const Sequelize = require('sequelize');
require('dotenv').config();


const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });


module.exports = sequelize;

