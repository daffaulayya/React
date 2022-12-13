import { useEffect, useRef, useState } from "react";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GUEST_BOOK_PAGE } from "./guest-model";
import guestSlice, {
  fetchGuests,
  selectGuest,
  deleteGuest,
} from "./guest-slice";

export default function GuestBookTable(props) {
  const { setPage } = props;
  const [newDelete, setnewDelete] = useState();
  const [showAlert, setshowAlert] = useState(false);
  const { guests } = useSelector((store) => store[guestSlice.name]);
  const dispatch = useDispatch();
  const loading = useRef(true);
  //fetch dipanggil akan mengembalikan promise.
  // hook yang mewakili lifecycle react
  // lifecycle: componentDidMount, componentWillMount, componentDidUpdate
  /**
   * useEffect(() => {
   * console.log("mount"); //componentDidMout
   *
   * return () => {
   * console.log("unmount"); //componentWillMount
   * }
   * }, [])
   */

  useEffect(() => {
    if (loading.current) {
      dispatch(fetchGuests());
      loading.current = false;
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGuests());
    setTimeout(() => {
      setshowAlert(false);
    }, 1500);
  }, [newDelete]);

  return (
    <>
      {showAlert === true ? (
        <Alert variant="success" onClose={() => setshowAlert(false)}>
          sukses deh
        </Alert>
      ) : (
        ""
      )}
      <Table striped hover responsive>
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading.current && (
            <tr>
              <td colSpan={6} className="text-center text-info fw-bold">
                <Spinner
                  animation="border"
                  variant="info"
                  size="sm"
                  as="span"
                />
                loading...
              </td>
            </tr>
          )}
          {!loading.current && Array.isArray(guests) && guests.length === 0 && (
            <tr>
              <td colSpan={6} className="fw-bold text-center text-warning">
                No Data
              </td>
            </tr>
          )}
          {guests.length > 0 &&
            guests.map((guest, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1} </td>
                  <td>{guest.firstName} </td>
                  <td>{guest.lastName} </td>
                  <td>{guest.phone} </td>
                  <td>{guest.address} </td>
                  <td className="d-flex justify-content-around">
                    <Button
                      size="sm"
                      variant="dark"
                      onClick={() => {
                        dispatch(selectGuest(guest.id));
                        setPage(GUEST_BOOK_PAGE.FORM);
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        dispatch(deleteGuest(guest.id));
                        setnewDelete(newDelete + 1);
                        setshowAlert(true);
                      }}
                    >
                      Delete
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
