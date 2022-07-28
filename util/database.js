//jshint esversion:6
const Sequelize = require('sequelize');

const sequelize = new Sequelize("nodeDB", "root", "", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;