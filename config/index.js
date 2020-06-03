const dotenv = require("dotenv")

const envFound = dotenv.config()

if (!envFound) throw new Error("Couldn't find .env file")

module.exports = {
  db: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "HEREISUSERID",
    password: process.env.MYSQL_PASSWORD || "HEREISPASSWORD",
    database: process.env.MYSQL_DATABASE || "DataScienceConsept",
    port: process.env.MYSQL_PORT || 3306,
  }
}
