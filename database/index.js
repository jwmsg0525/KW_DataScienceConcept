const mysql = require("mysql2/promise")
const bluebird = require("bluebird")
const config = require("../config")

const connectionPool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  Promise: bluebird,
})

module.exports = {
  connectionPool,
}
