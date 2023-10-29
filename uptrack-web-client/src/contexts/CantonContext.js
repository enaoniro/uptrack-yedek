import { createContext, useEffect, useState } from "react";
export const CantonContext = createContext();

const CantonContextProvider = (props) => {
  const [cantonList, setCantonList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newCanton, setNewCanton] = useState();

  useEffect(() => {
    getCantonList();
  }, []);

  //pCanton auth0 dan gelen Canton bilgileri
  //bu bilgi buradan backende Cantonroutera gonderiliyor.
  // const checkAuthenticatedCanton=async(pCanton) => {
  //   console.log(pCanton)

  //   const response = await fetch('https://uptrackme.onrender.com/cantons/check', {
  //       method: 'post',
  //       body: JSON.stringify(pCanton),
  //       headers: { "Content-Type": "application/json" }
  //   })

  //   return await response.json();

  // }

  const getCantonList = async () => {
    const response = await fetch("https://uptrackme.onrender.com/cantons");
    const cantonList = await response.json();
    setCantonList(cantonList);
  };

  const addCanton = async (pCanton) => {
    // if (pCanton.email !==undefined) {
    const newCanton = {
      id: pCanton.id,
      name: pCanton.name,
      manager: pCanton.manager,
    };
    try {
      await fetch("https://uptrackme.onrender.com/cantons", {
        method: "POST",
        body: JSON.stringify(pCanton),
        headers: { "Content-Type": "application/json" },
      });

      setCantonList([...cantonList, newCanton]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCanton = async (pCanton) => {
    try {
      await fetch("https://uptrackme.onrender.com/cantons/" + pCanton.id, {
        method: "PUT",
        body: JSON.stringify(pCanton),
        headers: { "Content-Type": "application/json" },
      });

      setCantonList(
        cantonList.map((canton) =>
          canton.id === pCanton.id ? pCanton : canton
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCanton = async (pCantonId) => {
    try {
      await fetch("https://uptrackme.onrender.com/cantons/" + pCantonId, {
        method: "DELETE",
      });
      const updatedCantonList = cantonList.filter(
        (canton) => canton.id !== pCantonId
      );

      setCantonList(updatedCantonList);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("1", cantonList);

  return (
    <CantonContext.Provider
      value={{
        addCanton,
        deleteCanton,
        updateCanton,
        getCantonList,
        setCantonList,
        newCanton,
        setNewCanton,
        cantonList,
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </CantonContext.Provider>
  );
};

export default CantonContextProvider;
