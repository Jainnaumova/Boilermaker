const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
