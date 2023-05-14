import { Sequelize , DataTypes } from 'sequelize';
import Canton from './CantonModel.js';
import Student from "./StudentModel.js";
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});



const Group = sequelize.define('Group', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  CantonId: {
    type: DataTypes.INTEGER,
    allowNull: false,

  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  leader: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
},
  {
    timestamps: false,
    createdAt: false
  });

  Canton.hasMany(Group);
  Group.belongsTo(Canton);
  
// // Group.belongsTo(Canton);


await sequelize.sync({ alter: true });

 
export default Group;