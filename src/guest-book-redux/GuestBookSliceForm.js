import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addGuest } from "./guest-slice";

export default function GuestBookSliceForm(props) {
  const dispatch = useDispatch();
  const { person, idxSelected, handlePage, setPerson } = props;
  //   const [form, setForm] = useState(person);

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addGuest({ person, idxSelected }));
    handlePage("list");
  };

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as="h5">Form Buku Tamu</Card.Title>
        </Card.Header>
        <Form onSubmit={handleFormSubmit}>
          <Card.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Nama Depan
              </Form.Label>
              <Col>
                <Form.Control
                  name="firstName"
                  placeholder="Nama Depan"
                  value={person.firstName}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Nama Belakang
              </Form.Label>
              <Col>
                <Form.Control
                  name="lastName"
                  placeholder="Nama Belakang"
                  value={person.lastName}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Alamat
              </Form.Label>
              <Col>
                <Form.Control
                  name="address"
                  placeholder="Alamat"
                  value={person.address}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                No. Telepon
              </Form.Label>
              <Col>
                <Form.Control
                  name="phone"
                  placeholder="No. Telepon"
                  value={person.phone}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col sm="12">
                <Button
                  type="submit"
                  variant={idxSelected === undefined ? "primary" : "warning"}
                >
                  {idxSelected === undefined ? "Save" : "Edit"}
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Form>
      </Card>
    </>
  );
}
