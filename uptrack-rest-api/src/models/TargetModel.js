import { Sequelize , DataTypes } from 'sequelize';
import Task from './TaskModel.js';


const sequelize = new Sequelize('users', 'root', '50473524su', {
  host: 'localhost',
  dialect: 'mysql',
});



const Target = sequelize.define('Target', {
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
      allowNull:true,
  },
  task3: {
    type: DataTypes.INTEGER,
    allowNull:true,
},
task4: {
    type: DataTypes.INTEGER,
    allowNull:true,
},
task5: {
    type: DataTypes.INTEGER,
    allowNull:true,
},
TaskId: {
  type: DataTypes.INTEGER,
  allowNull:false,
},

},
  {
    timestamps: false,
    createdAt: false
  });

  Task.hasOne(Target);
  // Target.belongsTo(Task);
 

await sequelize.sync({ alter: true });

 
export default Target;