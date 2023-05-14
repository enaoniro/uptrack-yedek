import User from '../models/UserModel.js';
import Role from "../models/RoleModel.js";


export async function findByEmail(pEmail){
  return await User.findOne(pEmail);
}

export async function isUserExisting(pEmail){
  
  const emailCount = await User.count({
      where: {email: pEmail}
    });
  return emailCount == 0 ? false : true;
    
}

const getUserWithRole = async (pEmail) => {
  return User.findOne({
  where: {
    email: pEmail
  },
  include: Role
});

};

const getUserList = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (pId) => {
  try {
    return await User.findByPk(pId);
  } catch (error) {
    console.log(error);
  }
};


const createUser = async (pUser) => {
  try {
    return await User.create(pUser);
  } catch (error) {
    console.log(error);
  }
};

async function updateUser(pId, pUser) {
  try {
    let user = await User.findByPk(pId);
    user.set({
      first_name: pUser.first_name,
      last_name: pUser.last_name,
      email: pUser.email,
      RoleId: pUser.RoleId,
    });
    return await user.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteUser = async (pId) => {
  try {
    await User.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getUserWithRole,
  getUserById,
  isUserExisting,
  getUserList,
  createUser,
  updateUser,
  deleteUser,
};
