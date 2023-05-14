import express from 'express';
import userService from '../services/UserService.js';


const router = express.Router();

//auth0 dan gelen useri alip backend servicee gonderiyor. geriye servis status olarak geri bilgi veriyor
router.post("/check", async (req, res)=>{
    const auth0User = req.body;
    const usermail = {
        email: auth0User.email,
    };

    const user = await userService.checkUser(usermail);
    res.status(200).send(user);
})

//tum userlari isteyen frontend istegini alip user servisten bekle
router.get('/', async (req, res) => {
  const userList = await userService.getUsers();
  res.status(200).send(userList);
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const user = await userService.getUserById(id);
  res.status(200).send(user);
});



router.post('/', async (req, res) => {
  let newUser = req.body;
  let userList = await userService.getUsers();

  let userCheck = userList.findIndex((user) => user.email === newUser.email);
  console.log(userCheck);
  if (userCheck === -1) {
      const addedUser = await userService.addUser(newUser);
  res.status(201).send(addedUser);
  }
  
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const user = req.body;
  const updatedUser = await userService.updateUser(id, user);
  res.status(200).send(updatedUser);
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  await userService.deleteUser(id);
  res.status(200).send('Deleted!');
});

export default router;
