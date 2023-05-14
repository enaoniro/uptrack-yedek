import React from "react";
import { useEffect,useState } from "react";
import { UserContext } from '../contexts/UserContext';


export default function ToMyPage () {
    const  [role, setRole] = useState("");

    const { getUserList } = useContext(UserContext);

    const handleClick = (pUser, role) => {
        getUserList();
      };


}