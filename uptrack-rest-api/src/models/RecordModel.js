import { Sequelize, DataTypes } from "sequelize";
import Target from "./TargetModel.js";
import Task from "./TaskModel.js";
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize("users", "root", "50473524su", {
  host: "localhost",
  dialect: "mysql",
});

const Record = sequelize.define(
  "Record",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    task1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    task2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    task3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    task4: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    task5: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    TaskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
  }
);

Task.hasMany(Record);
Record.belongsTo(Task);
// Record.hasMany(Task)
// Task.belongsTo(Record)
//  Record.belongsToMany(Task, {'through': 'task_Record'});
//  Task.belongsToMany(Record, {'through': 'task_Record'});

// await sequelize.sync({ alter: true });

export default Record;
