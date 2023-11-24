import "dotenv/config";
import { Sequelize, DataTypes, Model } from "sequelize";
import User from "../models/UserModel.js";
import Role from "../models/RoleModel.js";
import Record from "../models/RecordModel.js";
import Student from "../models/StudentModel.js";
import Target from "../models/TargetModel.js";
import Canton from "../models/CantonModel.js";
import Grup from "../models/GrupModel.js";
import Task from "../models/TaskModel.js";

const password = process.env.REACT_APP_PASSWORD;

const sequelize = new Sequelize(`mysql://${process.env.MYSQLUSER}:${process.env.MYSQL_ROOT_PASSWORD}@${process.env.RAILWAY_TCP_PROXY_DOMAIN}:${process.env.RAILWAY_TCP_PROXY_PORT}/${process.env.MYSQL_DATABASE}`);

// const User = sequelize.define('User', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull:false,

//     }
//   },
//     {
//       timestamps: false,
//       createdAt: false
//     });

// const Student = sequelize.define('Student', {
//     id: {type: DataTypes.INTEGER,
//           autoIncrement: true,
//           primaryKey: true},

//     first_name:{type: DataTypes.STRING,
//     last_name: DataTypes.STRING,
//     email:DataTypes.STRING,
//   }
// });

//   const Role = sequelize.define('Roles', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//   });

//   const Grup = sequelize.define('Grup', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//   },
//     {
//       timestamps: false,
//       createdAt: false
//     });

//     const Canton = sequelize.define('Canton', {
//         id: {
//           type: DataTypes.INTEGER,
//           autoIncrement: true,
//           primaryKey: true,
//         },
//         name: {
//           type: DataTypes.STRING,
//           allowNull: false,
//         },

//       },
//         {
//           timestamps: false,
//           createdAt: false
//         });

// const Task = sequelize.define('Task', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     risale: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     pirlanta: {
//         type: DataTypes.STRING,
//         allowNull:false,
//     },
//     namaz: {
//       type: DataTypes.STRING,
//       allowNull:false,
//   },
//   cevsen: {
//       type: DataTypes.STRING,
//       allowNull:false,
//   },
//   devamlilik: {
//       type: DataTypes.STRING,
//       allowNull:false,
//   },

//   },
//     {
//       timestamps: false,
//       createdAt: false
//     });

// const Target = sequelize.define('Target', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     risale: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     pirlanta: {
//         type: DataTypes.INTEGER,
//         allowNull:false,
//     },
//     namaz: {
//       type: DataTypes.INTEGER,
//       allowNull:false,
//   },
//   cevsen: {
//       type: DataTypes.INTEGER,
//       allowNull:false,
//   },
//   devamlilik: {
//       type: DataTypes.INTEGER,
//       allowNull:false,
//   },

//   },
//     {
//       timestamps: false,
//       createdAt: false
//     });

//     const Studenttasks = sequelize.define('Studenttasks', {
//         id: {
//           type: DataTypes.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//           allowNull: false
//         },
//         selfGranted: DataTypes.BOOLEAN
//       }, { timestamps: false });

// Role.hasMany(User);
// User.belongsTo(Role);

// Canton.hasMany(Grup);
// Grup.belongsTo(Canton);

// Grup.hasMany(Student);
// Student.belongsTo(Grup);

// Student.hasMany(Task);
// Task.belongsTo(Student);

// Task.hasOne(Target);
// Target.hasOne(Record);

// // // All these work:
// // User.findAll({ include: Profile });
// // Profile.findAll({ include: User });
// // User.findAll({ include: Grant });
// // Profile.findAll({ include: Grant });
// // Grant.findAll({ include: User });
// // Grant.findAll({ include: Profile });

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await User.sync();
    await Role.sync();
    await Canton.sync();
    await Grup.sync();
    await Student.sync();
    await Task.sync();
    await Target.sync();
    await Record.sync();
    console.log("Connected to database!");
  } catch (err) {
    console.log(err);
  }
};
export default sequelize;
connectToDatabase();
