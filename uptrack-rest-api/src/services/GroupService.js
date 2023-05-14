import groupRepository from '../data/groupRepository.js';


const getGroups = async () => {
  const groupList = await groupRepository.getGroupList();
  return groupList;
};

const addGroup = async (pGroup) => {
  return await groupRepository.createGroup(pGroup);
};

const updateGroup = async (pId, pGroup) => {
  return await groupRepository.updateGroup(pId, pGroup);
};

const deleteGroup = async (pId) => {
  await groupRepository.deleteGroup(pId);
};

export default {
//   getGroupByEmail,
//   checkGroup,
  getGroups,
  addGroup,
  updateGroup,
  deleteGroup
}
