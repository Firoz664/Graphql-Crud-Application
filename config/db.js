const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  DB_NAME="shams",
  DB_USER="root",
  DB_PASS="firoz@1234",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established with server successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;