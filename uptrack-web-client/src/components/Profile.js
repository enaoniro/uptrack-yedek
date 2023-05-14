
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();



  
    
    const { addUser } = useContext(UserContext);
    
  
    
    const handleClick = () => {
      addUser(user);
    };


    return (
        isAuthenticated && (
        <div>
            {/* <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p> 
            <p>{user.sub}</p> 
            <JSONPretty data={user} />
            {JSON.stringify(user, null, 2)} */}
             
    {/* <form onSubmit={handleSubmit}>
    <input
       type='text'
       className='form-control'
        name='name'
        value={user.name}
        onChange={handleOnChange}
      />
      <br></br>
     <input
      type='text'
      className='form-control'
       name='name'
       value={user.email}
       onChange={handleOnChange}
     />

     <br></br> */}
     
     <p>{user.name}</p>
     <p>{user.email}</p>
     <p>{user.password}</p>
     <p>{user.created}</p>
     <p>{user.sub}</p>
      <button type='button' className='btn btn-primary mt-3' onClick={handleClick}>
         to my page
       </button>
       <JSONPretty data={user} />
     

        </div>
        
     )
    )
}
  


export default Profile
