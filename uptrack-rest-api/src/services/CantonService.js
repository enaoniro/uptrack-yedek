import cantonRepository from '../data/cantonRepository.js';
// import Student from '../models/StudentModel.js';

//auth0 dan gelen pStudenti alip Student repoda var mi yok mu sorgulamasi yapip varsa geriye 
// const checkStudent = async (pStudent) => {
//   // find Student object by email in the database
//   // if the Student is existing in the db then allow the Student to log in (send role info back to the react)
//   // if the Student is not existing then create the Student in the db
//   const isStudentExisting = await cantonRepository.isStudentExisting(pStudent.email)
//   if(isStudentExisting){  

//     return cantonRepository.getStudentWithRole(pStudent.email);
    
              
//    };
 
  
// }


// const getStudentByEmail = async (pEmail) => {

//   const StudentInDatabase = await cantonRepository.getStudentByEmail(pEmail)
//   return StudentInDatabase;
// }


const getCantons = async () => {
  const cantonList = await cantonRepository.getCantonList();
  return cantonList;
};

const addCanton = async (pCanton) => {
  return await cantonRepository.createCanton(pCanton);
};

const updateCanton = async (pId, pCanton) => {
  return await cantonRepository.updateCanton(pId, pCanton);
};

const deleteCanton = async (pId) => {
  await cantonRepository.deleteCanton(pId);
};

export default {
//   getCantonByEmail,
//   checkCanton,
  getCantons,
  addCanton,
  updateCanton,
  deleteCanton
}
