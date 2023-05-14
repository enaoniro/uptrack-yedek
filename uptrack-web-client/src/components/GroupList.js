import React, { useContext, useRef, useEffect, useState } from "react";
import { GroupContext } from "../contexts/GroupContext";
import { CantonContext } from "../contexts/CantonContext";
import Group from "./Group";
import Table from "react-bootstrap/Table";

const GroupList = ({ canton }) => {
  console.log(canton);

  const { groupList } = useContext(GroupContext);

  // const group = canton[0].Groups.map((group, key) => (
  //   <Group group={group} key={key} />
  // ));
  // console.log(group);

  return (
    <div className="w-100">
      <Table className="w-100" responsive="lg" bordered hover>
        <thead>
          <tr>
            {/* <th className='opacity-75'>Group leader</th>
            <th className="text-center">Group Id</th> */}

            {/* <th>Group id</th>    */}
            <th>Groups</th>
            {/* <th>actions</th>    */}
          </tr>
        </thead>
        <tbody className="w-100">
          {canton.Groups.map((group, key) => (
            <Group group={group} key={key} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GroupList;
