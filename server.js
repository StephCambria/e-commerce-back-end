const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");

// npm i dotenv@8.6.0
// npm i express@4.17.1
// npm i mysql2@2.1.0
// npm i sequelize@5.22.5


const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

