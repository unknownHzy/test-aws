require('dotenv').config();

module.exports = {
  "development": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": "mysql",
      "port": 3306,
      "seederStorage": "sequelize",
      "seederStorageTableName": "seeders_data"
  },
  /*"test": {
      "username": "root",
      "password": "root",
      "database": "test",
      "host": "localhost",
      "dialect": "mysql",
      "port": 3306,
      "seederStorage": "sequelize",
      "seederStorageTableName": "seeders_data"
  },*/
    "production": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
        "port": 3306,
        "seederStorage": "sequelize",
        "seederStorageTableName": "seeders_data"
    }
}
