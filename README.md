# E-Commerce Backend
![License Badge](https://shields.io/badge/license-ISC-green)

## Video Demo
[DEMO](https://watch.screencastify.com/v/u9aB6Y21BWHy08WocfPV)

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description

A command line application that contains the database for an e-commerce site. The database holds information about products, product categories, product tags, and the storage of sensitive data. 

This project provided me with the bulk of the code already written, and my goal was to finish writing code for the routes and models, as well as sync the server to the MySQL database via Express and Sequelize.


## Installation

To install this application, clone the repository to your local machine and run ```npm install``` on the command line, which will give you the following necessary dependencies:

* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Express](https://www.npmjs.com/package/express)
* [Mysql2](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://www.npmjs.com/package/sequelize)

## Usage

Next, run the following lines of code in the command line as well:

* ```mysql -u root -p```
* enter your password when prompted
* ```source db/schema.sql;```
* if you would like to double-check that your database is selected, run ```select database();```
* ```exit;```
* ```npm run seed```
* ```node server.js```

If the above steps are followed correctly, your database shoudld be created, in use, and synced with the localhost server.

Below are a few screenshots of the application being run in [Insomnia](https://insomnia.rest/) after running the server:

<img width="1680" alt="Screen Shot 2022-10-05 at 3 24 18 PM" src="https://user-images.githubusercontent.com/107421370/194149574-5ccd849a-812c-47fd-8ddc-787b601f4626.png">

<img width="1680" alt="Screen Shot 2022-10-05 at 3 48 08 PM" src="https://user-images.githubusercontent.com/107421370/194149600-6331cf6f-07d6-45b8-b7d0-6cebf891312d.png">

<img width="1680" alt="Screen Shot 2022-10-05 at 3 48 18 PM" src="https://user-images.githubusercontent.com/107421370/194149614-79b1529f-462b-45eb-8789-679cedf64a89.png">


## Contributing
You can contribute to this project by submitting bugs via [ISSUES](https://github.com/StephCambria/e-commerce-back-end/issues).
## Tests
All testing was done locally through the command line, as well as in Insomnia.


## License
This application is licensed under the ISC license.

## Questions
You can find me [HERE](https://github.com/StephCambria) on Github.
You can email me at steph.cambria.art@gmail.com if you have any additional questions.
