import express from "express";
import TaskService from "../services/TaskService.js";
// import * as TaskService from '../service/Task-service.js';

const router = express.Router();

//tum Tasklari isteyen frontend istegini alip Task servisten bekle
router.get("/", async (req, res) => {
  const taskList = await TaskService.getTasks();
  res.status(200).send(taskList);
});

router.get("/:id", async (req, res) => {
  const taskId = req.params.id;
  const task = await TaskService.getTasks(taskId);
  res.status(200).send(task);
});

router.get("/suttasks", async (req, res) => {
  const studentId = req.params.id;
  const tasks = await TaskService.getStudentTask(studentId);
  res.status(200).send(tasks);
});

router.post("/", async (req, res) => {
  const task = req.body;
  const newTask = await TaskService.addTask(task);
  res.status(201).send(newTask);
});

router.put("/:id", async (req, res) => {
  const taskId = req.params.id;
  const existingTask = req.body;
  const updatedTask = await TaskService.updateTask(taskId, existingTask);

  res.status(200).send(updatedTask);
});

router.delete("/:id", async (req, res) => {
  const taskId = req.params.id;
  await TaskService.deleteTask(taskId);
  res.status(200);
});

export default router;
