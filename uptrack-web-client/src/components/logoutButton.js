import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    
    //  <h1> {isAuthenticated ? "logged in " : "not logged in"}</h1>
     isAuthenticated && (
       <button onClick={() => logout()}>
         Log Out
       </button>
     )
  
  )
};

export default LogoutButton;