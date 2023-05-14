import express from 'express';
import GroupService from '../services/GroupService.js';
// import * as groupService from '../service/student-service.js';

const router = express.Router();



//tum studentlari isteyen frontend istegini alip student servisten bekle
router.get('/', async (req, res) => {
  const groupList = await GroupService.getGroups();
  res.status(200).send(groupList);
});

// router.post('/', async (req, res) => {
//   let newGroup = req.body;
//   let groupList = await GroupService.getGroups();

//   let existinggroup = groupList.findIndex((group) => group.email === newGroup.email);
//   console.log(existinggroup);
//   if (existinggroup === -1) {
//       const addedgroup = await GroupService.addGroup(newGroup);
//   res.status(201).send(addedgroup);
//   }
// });

router.post('/', async (req, res) => {
  let newGroup = req.body;
  const addedgroup = await GroupService.addGroup(newGroup);
  res.status(201).send(addedgroup);
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const group = req.body;
  const updatedgroup = await GroupService.updateGroup(id, group);
  res.status(200).send(updatedgroup);
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  await GroupService.deleteGroup(id);
  res.status(200).send('Deleted!');
});
  
  export default router;




