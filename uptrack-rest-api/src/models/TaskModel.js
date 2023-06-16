import { Sequelize, DataTypes } from "sequelize";
import Student from "./StudentModel.js";
import Target from "./TargetModel.js";
import Record from "./RecordModel.js";
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize("users", "root", "50473524su", {
  host: "localhost",
  dialect: "mysql",
});

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    task1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    task2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    task3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    task4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    task5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    StudentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    // StudentId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Student',
    //     key: 'id',
    //     as: 'StudentId'
    //   }
    // }
  },
  {
    timestamps: true,
  }
);

//   Task.associate = (models) => {
//    Task.belongsTo(models.Student, {
//      foreignKey: {
//        name: 'StudentId',
//        allowNull: false
//      },
//      as: 'tasks'
//    });
//  };

Student.hasMany(Task);
Task.belongsTo(Student);

// Student.hasMany(Task);
// Task.hasMany(Target);
// Target.belongsTo(Task);
// Task.hasMany(Record);
// Record.belongsTo(Task);
//  Target.belongsToMany(Task, {'through': 'task_target'});
//  Task.belongsToMany(Target, {'through': 'task_target'});

await sequelize.sync({ alter: true });

export default Task;
