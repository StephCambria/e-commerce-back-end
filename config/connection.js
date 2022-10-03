const dotenv = require('dotenv');
dotenv.config();

const Sequelize = require('sequelize');

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

sequelize.authenticate(() => {
  console.log('Connection successful!');
}).catch((err) => {
  if (err) throw err;
})

module.exports = sequelize;

