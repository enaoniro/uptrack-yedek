import userRepository from "../data/UserRepository.js";
import User from "../models/UserModel.js";

//auth0 dan gelen pUseri alip user repoda var mi yok mu sorgulamasi yapip varsa geriye
const checkUser = async (pUser) => {
  // find user object by email in the database
  // if the user is existing in the db then allow the user to log in (send role info back to the react)
  // if the user is not existing then create the user in the db
  const isUserExisting = await userRepository.isUserExisting(pUser.email);
  if (isUserExisting) {
    return userRepository.getUserWithRole(pUser.email);
  }
};

const getUserById = async (pId) => {
  const user = await userRepository.getUserById(pId);
  return user;
};

const getUsers = async () => {
  const userList = await userRepository.getUserList();
  return userList;
};

const addUser = async (pUser) => {
  return await userRepository.createUser(pUser);
};

const updateUser = async (pId, pUser) => {
  return await userRepository.updateUser(pId, pUser);
};

const deleteUser = async (pId) => {
  await userRepository.deleteUser(pId);
};

export default {
  getUserById,
  checkUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
