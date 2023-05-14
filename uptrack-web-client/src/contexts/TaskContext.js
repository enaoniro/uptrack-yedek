import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // const [newtask, setNewTask] = useState({})
  const [selectedTask, setSelectedTask] = useState({});

  useEffect(() => {
    getTaskList();
    // getStudentTaskById();
    // getTaskById();
  }, []);

  const getTaskList = async () => {
    const response = await fetch("http://localhost:3001/api/v1/tasks");
    const taskList = await response.json();
    setTaskList(taskList);
  };

  //   const getTaskById = async (pTask) => {
  //     const response = await fetch('http://localhost:3001/api/v1/tasks', {
  //       method: 'post',
  //       body: JSON.stringify(pTask),
  //       headers: { "Content-Type": "application/json" }
  //   })

  //   return await response.json();
  // }

  //   const getStudentTaskById = async (pTask) => {

  //       const response = await fetch('http://localhost:3001/api/v1/tasks/suttask', {
  //         method: 'POST',
  //         body: JSON.stringify(pTask),
  //         headers: { 'Content-Type': 'application/json'},
  //       });

  //       return await response.json();
  // };
  //     setTaskList(
  //       taskList.map((task) =>
  //         task.Studentd === pId
  //       )
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const addTask = async (pTask) => {
    // if (pUser.email !==undefined) {
    // const newTask = {
    //   // id: pTask.id,
    //   task1: pTask.task1,
    //   task2: pTask.task2,
    //   task3: pTask.task3,
    //   task4: pTask.task4,
    //   task5: pTask.task5,
    //   StudentId: pTask.StudentId,
    // };
    try {
      const res = await fetch("http://localhost:3001/api/v1/tasks", {
        method: "POST",
        body: JSON.stringify(pTask),
        headers: { "Content-Type": "application/json" },
      });

      // const data = await res.json();

      setTaskList([...taskList, res]);
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

  // const selectTask = (id) => {
  //   setSelectedTask(taskList.find(Task=>Task.id==id));
  //   return selectedTask;
  // }

  console.log(taskList);

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
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
