import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export const GrupContext = createContext();

const GrupContextProvider = (props) => {
  const [grupList, setGrupList] = useState([]);
  const [grup, setGrup] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  // let { id } = useParams()

  useEffect(() => {
    getGrupList();
  }, []);

  const getGrupList = async () => {
    const response = await fetch("https://uptrackme.onrender.com/grups");
    const grupList = await response.json();
    setGrupList(grupList);
  };

  const addGrup = async (pGrup, id) => {
    const newGrup = {
      name: pGrup.name,
      leader: pGrup.leader,
      CantonId: id,
    };
    try {
      const res = await fetch("https://uptrackme.onrender.com/grups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGrup),
      });

      // const data = await res.json();

      setGrupList([...grupList, newGrup]);
      getGrupList();
    } catch (error) {
      console.log(error);
    }
  };

  const updateGrup = async (pGrup) => {
    try {
      await fetch("https://uptrackme.onrender.com/grups/" + pGrup.id, {
        method: "PUT",
        body: JSON.stringify(pGrup),
        headers: { "Content-Type": "application/json" },
      });

      setGrupList(
        grupList.map((grup) => (grup.id === pGrup.id ? pGrup : grup))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGrup = async (pGrupId) => {
    try {
      await fetch("https://uptrackme.onrender.com/grups/" + pGrupId, {
        method: "DELETE",
      });
      const updateDGrupList = grupList.filter((grup) => grup.id !== pGrupId);

      setGrupList(updateDGrupList);
      getGrupList();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log("1", grupList);

  return (
    <GrupContext.Provider
      value={{
        addGrup,
        getGrupList,
        updateGrup,
        deleteGrup,
        grup,
        setGrup,
        isOpen,
        setIsOpen,
        setGrupList,
        grupList,
      }}
    >
      {props.children}
    </GrupContext.Provider>
  );
};

export default GrupContextProvider;
