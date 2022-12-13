import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import GuestBookSliceForm from "./GuestBookSliceForm";
import GuestBookSliceList from "./GuestBookSliceList";
import { Provider } from "react-redux";
import MainStore from "../store";

class Person {
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.address = "";
    this.phone = "";
  }
}

export default function GuestBookSlicePage(props) {
  const [page, setPage] = useState("list");
  const [person, setPerson] = useState(new Person());
  const [idxSelected, setIdxSelected] = useState(undefined);

  const onHandleEdit = (personSelected, idx) => {
    setPerson(personSelected);
    setPage("form");
    setIdxSelected(idx);
  };

  const handlePage = (newPage) => {
    setPerson(new Person());
    setPage(newPage);
    setIdxSelected(undefined);
  };

  return (
    <Provider store={MainStore}>
      <Row className="p-3">
        <Col sm="12" className="mb-3">
          <Button className="me-3" onClick={() => handlePage("form")}>
            Open Form
          </Button>
          <Button onClick={() => handlePage("list")}>Open List</Button>
        </Col>
        <Col sm="12">
          {page === "list" ? (
            <GuestBookSliceList onHandleEdit={onHandleEdit} />
          ) : (
            <GuestBookSliceForm
              person={person}
              idxSelected={idxSelected}
              handlePage={handlePage}
              setPerson={setPerson}
            />
          )}
        </Col>
      </Row>
    </Provider>
  );
}
