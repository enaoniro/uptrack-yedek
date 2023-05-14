import Group from '../models/GroupModel.js';
import Canton from '../models/CantonModel.js';
import Student from '../models/StudentModel.js';


const getGroupList = async () => {
  
    return await Group.findAll({
      include: Student
      
    });
  
  };


const createGroup = async (pGroup) => {
  try {
    return await Group.create(pGroup);
  } catch (error) {
    console.log(error);
  }
};

async function updateGroup(pId, pGroup) {
  try {
    let group = await Group.findByPk(pId);
    group.set({
      name: pGroup.name,
      leader: pGroup.leader,
      CantonId: pGroup.CantonId,
    });
    return await group.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteGroup = async (pId) => {
  try {
    await Group.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getGroupList,
  createGroup,
  updateGroup,
  deleteGroup,
};
  
