//jshint esversion:6
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodeDB',
    password: ''
});

module.exports = pool.promise();