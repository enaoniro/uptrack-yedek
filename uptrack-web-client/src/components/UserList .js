import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import User from './User';
import Table from "react-bootstrap/Table";

const UserList = () => {
  const { userList } = useContext(UserContext);

  const user = userList.map((user) => <User user={user} />);

  return (
    <div className='w-100'>
      <Table className='w-100' responsive="sm" bordered hover>
        <thead>
         <tr>
            <th>user name</th>
            
            <th rowSpan={2}>email</th>
          
            <th rowSpan={2}>role</th>      
        </tr>
        </thead>
        <tbody className='w-100'>
        
          {user}
        
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
