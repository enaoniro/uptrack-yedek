import TaskRepository from "../data/TaskRepository.js";
import Task from "../models/TaskModel.js";

//auth0 dan gelen pTaski alip Task repoda var mi yok mu sorgulamasi yapip varsa geriye
const checkTask = async (pTask) => {
  // find Task object by email in the database
  // if the Task is existing in the db then allow the Task to log in (send role info back to the react)
  // if the Task is not existing then create the Task in the db
  const isTaskExisting = await TaskRepository.isTaskExisting(pTask.id);
  if (isTaskExisting) {
    return TaskRepository.getTaskWithRole(pTask.id);
  }
};

const getTasks = async () => {
  const taskList = await TaskRepository.getTaskList();
  return taskList;
};

const getTasksByStudentId = async (studentId) => {
  const studenttasks = await TaskRepository.getStudentWithTask(studentId);
  return studenttasks;
}

const addTask = async (pTask) => {
  // const taskList = await TaskRepository.getTaskList();
  await TaskRepository.createTask(pTask);

};

const updateTask = async (pId, pTask) => {
  return await TaskRepository.updateTask(pId, pTask);
};

const updateTaskCompleted = async (pId, pTask) => {
  return await TaskRepository.updateTaskComplete(pId, pTask);
};

const deleteTask = async (pId) => {
  await TaskRepository.deleteTask(pId);
};

export default {
  getTasksByStudentId,
  checkTask,
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  updateTaskCompleted,
};
