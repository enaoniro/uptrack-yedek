import { Sequelize, DataTypes } from "sequelize";
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize("users", "root", "50473524su", {
  host: "localhost",
  dialect: "mysql",
});

const Role = sequelize.define("Roles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},

{
  timestamps: false,
  createdAt: false
});

await sequelize.sync({ alter: true });

export default Role;
