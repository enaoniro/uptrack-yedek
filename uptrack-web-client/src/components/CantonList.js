import React, { useContext } from "react";
import { CantonContext } from "../contexts/CantonContext";
import Canton from "./Canton";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const CantonList = () => {
  const { cantonList } = useContext(CantonContext);

  // const canton = cantonList.map((canton) => <Canton canton={canton} key={canton.id}/>);

  return (
    <Container fluid className="mt-10 p-3 bg-white">
      <Table className="w-100 p-3 bg-white" bordered hover>
        <thead className="p-3">
          <tr className="bg-white">
            <th className="w-50 h-100 opacity-75">Canton name</th>
            <th className="w-25 h-100  opacity-75">Canton Manager</th>
          </tr>
        </thead>
        <tbody className="w-100 bg-white">
          {cantonList.map((canton) => (
            <Canton canton={canton} key={canton.id} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CantonList;
