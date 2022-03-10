/* npm i sequelize
npm i mariadb
*/

const { Sequelize } = require('sequelize');
const config = require('./config');


const db = new Sequelize(config.database, config.username, config.password);
