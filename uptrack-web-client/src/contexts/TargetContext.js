import { createContext, useEffect, useState, useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
export const TargetContext = createContext();

const TargetContextProvider = (props) => {
  const [targetList, setTargetList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState({});
  const [selectedTarget, setSelectedTarget] = useState({});
  const { studentList, setStudentList } = useContext(StudentContext);

  // setSelectedTarget(TargetList.find((stu =>stu.id===Target.id)))

  useEffect(() => {
    getTargetList();
  }, []);

  const getTargetList = async () => {
    const response = await fetch("http://localhost:3001/api/v1/targets");
    const targetList = await response.json();
    setTargetList(targetList);
  };

  //   const getUserByEmail = async (pUser) => {
  //     const response = await fetch('http://localhost:3001/api/v1/users');
  //     const userList= await response.json();
  //     const data = userList.filter(user=>user.email==pUser.email);
  //     setUserInDatabase(data);
  //   };
  //  console.log(userInDatabase)

  const addTarget = async (pTarget, id) => {
    // if (pUser.email !==undefined) {
    const newTarget = {
      task1: pTarget.task1,
      task2: pTarget.task2,
      task3: pTarget.task3,
      task4: pTarget.task4,
      task5: pTarget.task5,
      TaskId: id,
    };
    try {
      await fetch("http://localhost:3001/api/v1/targets", {
        method: "POST",
        body: JSON.stringify(newTarget),
        headers: { "Content-Type": "application/json" },
      });

      setTargetList(previousState => [...targetList, newTarget]);
      getTargetList();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTarget = async (pTarget) => {
    try {
      await fetch("http://localhost:3001/api/v1/targets/" + pTarget.id, {
        method: "PUT",
        body: JSON.stringify(pTarget),
        headers: { "Content-Type": "application/json" },
      });

      setTargetList(
        targetList.map((target) =>
          target.id === pTarget.id ? pTarget : target
        )
      );
     
    } catch (error) {
      console.log(error);
    }
  };

  // const selectTarget = (id) => {
  //   setSelectedTarget(TargetList.find(Target=>Target.id==id));
  //   return selectedTarget;
  // }

  console.log(targetList);

  return (
    <TargetContext.Provider
      value={{
        addTarget,
        updateTarget,
        getTargetList,
        targetList,
        setTargetList,
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </TargetContext.Provider>
  );
};

export default TargetContextProvider;
