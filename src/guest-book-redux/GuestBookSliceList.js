import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import guestSlice from "./guest-slice";

export default function GuestBookSliceList(props) {
  const state = useSelector((store) => store[guestSlice.name]);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Full Name</th>
            <th>Alamat</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.guests.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{`${item.firstName} ${item.lastName}`}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => props.onHandleEdit(item, idx)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
