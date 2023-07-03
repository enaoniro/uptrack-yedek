import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export const GroupContext = createContext();

const GroupContextProvider = (props) => {
  const [groupList, setGroupList] = useState([]);
  const [group, setGroup] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  // let { id } = useParams()

  useEffect(() => {
    getGroupList();
  }, []);

  const getGroupList = async () => {
    const response = await fetch("http://localhost:3001/api/v1/groups");
    const groupList = await response.json();
    setGroupList(groupList);
  };

  const addGroup = async (pGroup, id) => {
    const newGroup = {
      name:pGroup.name,
      leader:pGroup.leader,
      CantonId : id
    }
    try {
        const res = await fetch("http://localhost:3001/api/v1/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGroup),
      });

      // const data = await res.json();

      setGroupList([...groupList, newGroup]);
      getGroupList();
    } catch (error) {
      console.log(error);
    }
  };

  const updateGroup = async (pGroup) => {
    try {
      await fetch("http://localhost:3001/api/v1/groups/" + pGroup.id, {
        method: "PUT",
        body: JSON.stringify(pGroup),
        headers: { "Content-Type": "application/json" },
      });

      setGroupList(
        groupList.map((group) => (group.id === pGroup.id ? pGroup : group))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGroup = async (pGroupId) => {
    try {
      await fetch("http://localhost:3001/api/v1/groups/" + pGroupId, {
        method: "DELETE",
      });
      const updateDGroupList = groupList.filter(
        (group) => group.id !== pGroupId
      );

      setGroupList(updateDGroupList);
      getGroupList();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log("1", groupList);

  return (
    <GroupContext.Provider
      value={{
        addGroup,
        getGroupList,
        updateGroup,
        deleteGroup,
        group,
        setGroup,
        isOpen,
        setIsOpen,
        setGroupList,
        groupList,
      }}
    >
      {props.children}
    </GroupContext.Provider>
  );
};

export default GroupContextProvider;
