// const config = require("./config");
// var mysql = require("mysql");
// const util = require("util");

// console.log({
//   host: config.database.host || "remotemysql.com",
//   user: config.database.user || "Ch8AIA96QJ",
//   password: config.database.password || "6qsdY8t213",
//   database: config.database.name || "Ch8AIA96QJ",
// });

// var connection = mysql.createConnection({
//   host: config.database.host || "remotemysql.com",
//   user: config.database.user || "Ch8AIA96QJ",
//   password: config.database.password || "6qsdY8t213",
//   database: config.database.name || "Ch8AIA96QJ",
// });

// connection.connect();

// connection.end();

// module.exports = connection;

const mysql = require("mysql");
const util = require("util");
const config = require("./config");

const pool = mysql.createConnection({
  host:
    config.database.host || "localhost",
  user: config.database.user || "",
  password: config.database.password || "",
  database: config.database.name || "movies_backend",
  charset: "utf8mb4",
  connectionLimit: 100000,
  connectTimeout: 1000000000, // 10 seconds
  acquireTimeout: 1000000000, // 10 seconds
  waitForConnections: true, // Default: true
  queueLimit: 15000000000,
});


// const pool = mysql.createConnection({
//   host:
//     config.database.host || "clinidoc.cc5lhjsgunpi.us-east-2.rds.amazonaws.com",
//   user: config.database.user || "admin",
//   password: config.database.password || "admin123",
//   database: config.database.name || "NewClinidoc",
//   charset: "utf8mb4",
//   connectionLimit: 100000,
//   connectTimeout: 1000000000, // 10 seconds
//   acquireTimeout: 1000000000, // 10 seconds
//   waitForConnections: true, // Default: true
//   queueLimit: 15000000000,
// });

pool.query = util.promisify(pool.query);

module.exports = pool;
