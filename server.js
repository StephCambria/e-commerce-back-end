const express = require('express');
const routes = require('./routes');
// import sequelize connection

// npm i dotenv
// npm i express@4.17.1
// npm i mysql2
// npm i sequelize

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
