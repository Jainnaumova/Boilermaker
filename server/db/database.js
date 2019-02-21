const Sequelize = require("sequelize");
const pkg = require("../../package.json");

console.log("Opening database connection");

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`,
  {
    logging: false,
    operatorsAliases: false
  }
);

module.exports = db;
