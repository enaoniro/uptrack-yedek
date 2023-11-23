import React, { useContext, useRef, useEffect, useState } from "react";
import { GrupContext } from "../contexts/GrupContext";
import { CantonContext } from "../contexts/CantonContext";
import Grup from "./Grup";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const GrupList = ({ canton }) => {
  console.log(canton);

  const { grupList } = useContext(GrupContext);

  // const grup = canton[0].Grups.map((grup, key) => (
  //   <Grup grup={grup} key={key} />
  // ));
  // console.log(grup);

  return (
    <Container fluid className="mt-10 p-3 bg-white">
      <Table className="w-100" bordered hover>
        <thead>
          <tr>
            {/* <th className='opacity-75'>Grup leader</th>
            <th className="text-center">Grup Id</th> */}

            {/* <th>Grup id</th>    */}
            <th>Groups</th>
            {/* <th>actions</th>    */}
          </tr>
        </thead>
        <tbody className="w-100">
          {canton?.Grups?.map((grup, key) => (
            <Grup grup={grup} key={key} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GrupList;
