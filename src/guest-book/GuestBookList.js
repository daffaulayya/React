import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function GuestBookList(props) {
  const { guests, editForm } = props;

  return (
    <Table striped bordered hover style={{ textAlign: "center" }}>
      <thead className="table-light">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {guests.map((orang, idx) => {
          return (
            <tr key={idx}>
              <td>{orang.firstName}</td>
              <td>{orang.lastName}</td>
              <td>{orang.phone}</td>
              <td>{orang.address}</td>
              <td>
                <Button onClick={() => props.edit(orang, idx)} variant="danger">
                  Edit
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default GuestBookList;
