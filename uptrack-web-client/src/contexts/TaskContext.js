import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [studentTasks, setStudentTasks] = useState([]);
  const [task, setTask] = useState({});

  let { id } = useParams();

  useEffect(() => {
    getTaskList();
    getTaskByStudentId();
  }, []);

  const getTaskList = async () => {
    const response = await fetch("http://localhost:3001/api/v1/tasks");
    const taskList = await response.json();
    setTaskList(taskList);
  };

  const getTaskByStudentId = async (id) => {
    const response = await fetch(`http://localhost:3001/api/v1/tasks/${id}`);
    const suttasks = await response.json();
    setStudentTasks(suttasks);
  };

  const addTask = async (pTask, id) => {
    const newTask = {
      task1: pTask.task1,
      task2: pTask.task2,
      task3: pTask.task3,
      task4: pTask.task4,
      task5: pTask.task5,
      isCompleted: false,
      StudentId: id,
    };
    try {
      await fetch("http://localhost:3001/api/v1/tasks", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json" },
      });

      setTaskList((previousTaskList) => [...taskList, newTask]);
      getTaskList();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (pTask) => {
    console.log(pTask.id);
    try {
      await fetch("http://localhost:3001/api/v1/tasks/" + pTask.id, {
        method: "PUT",
        body: JSON.stringify(pTask),
        headers: { "Content-Type": "application/json" },
      });

      setTaskList(
        taskList.map((task) => (task.id === pTask.id ? pTask : task))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const setTaskCompleted = async (pTask) => {
    console.log(pTask?.id);
    const newTask = { ...pTask, isCompleted: !pTask.isCompleted };

    try {
      const res = await fetch("http://localhost:3001/api/v1/tasks/settask/" + pTask.id, {
        method: "PUT",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json" },
      });

      // const data = await res.json();


      setTaskList(
         taskList.map((task) => (task.id === newTask.id ? newTask : task))
      );
      getTaskList();

      console.log(newTask);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        addTask,
        updateTask,
        getTaskList,
        taskList,
        setTaskList,
        isOpen,
        setIsOpen,
        setTaskCompleted,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
