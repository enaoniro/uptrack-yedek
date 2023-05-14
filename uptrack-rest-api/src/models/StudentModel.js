import { Sequelize , DataTypes } from 'sequelize';
import Task from "./TaskModel.js";
import Group from "./GroupModel.js";
import Target from './TargetModel.js';
import Record from './RecordModel.js';
import groupRepository from '../data/groupRepository.js';
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});



const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
      type: DataTypes.STRING,
      allowNull:false,

  },
  GroupId: {
    type: DataTypes.INTEGER,
    allowNull:false,
    foreignKey: true,
 },
  // TaskId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true,
  //   // autoIncrement: true,
  //   // primaryKey: true,
  // },
  // TargetId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   // autoIncrement: true,
  //   // primaryKey: true,
  // },
  // RecordId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   // autoIncrement: true,
  //   // primaryKey: true,
  // },
},
  {
    timestamps: false,
    createdAt: false
  });


// Student.associate = (models) => {
//  Student.hasMany(models.Task, {
//    foreignKey: {
//      name: 'StudentId',
//      allowNull: false
//    },
//    as: 'tasks'
//  });

Group.hasMany(Student);
Student.belongsTo(Group);
// Student.hasMany(Task);
// Task.belongsTo(Student);

await sequelize.sync({ alter: true  });

 
export default Student;