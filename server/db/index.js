const db = require("./database");
const User = require("./models/user");

// Assosiations here if need
// Student.belongsTo(Campus);
// Campus.hasMany(Student);

module.exports = {
  db,
  User
};
