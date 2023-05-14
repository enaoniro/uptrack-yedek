import { Sequelize , DataTypes } from 'sequelize';
import Group from "./GroupModel.js";
// import sequelize from "../commons/sequelize.js"

const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});



const Canton = sequelize.define('Canton', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
},
  {
    timestamps: false,
    createdAt: false
  });

// Group.belongsTo(Canton);
// Canton.hasMany(Group);


await sequelize.sync({ alter: true });

 
export default Canton;