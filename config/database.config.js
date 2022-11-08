require('dotenv').config();

const {DEVELOPMENT_DATABASE_PASSWORD,databaseProductionPassword} =process.env;

module.exports = {
    "development": {
      "username": "root",
      "password": databasePassword,
      "database": "ecommerce_development_database",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "sql12553108",
      "password": PRODDUCTION_DATABASE_PASSWORD,
      "database": "sql12553108",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }