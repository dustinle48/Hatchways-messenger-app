const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USERNAME,process.env.DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
}
);

module.exports = db;
