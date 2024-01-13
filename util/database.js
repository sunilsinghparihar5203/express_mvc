const mysql = require('mysql2');

const pool = mysql.createPool({
  host:'localhost',
  user:'root',
  database:'node-tables',
  password:'root',
})

module.exports = pool.promise();