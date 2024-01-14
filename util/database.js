const Squelize = require("sequelize");
const sequelize = new Squelize("node-tables", "root", "root", {
  dialect: "mysql",
  host: "localHost",
});

module.exports = sequelize;



// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host:'localhost',
//   user:'root',
//   database:'node-tables',
//   password:'root',
// })

// module.exports = pool.promise();
