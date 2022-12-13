import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GUEST_BOOK_PAGE } from "./guest-model";
import guestSlice, {
  saveGuest,
  unselectGuest,
  updateGuest,
} from "./guest-slice";

export default function GuestBookForm(props) {
  const { selectedGuest } = useSelector((store) => store[guestSlice.name]);

  const [firstName, setFirstName] = useState(selectedGuest?.firstName || "");
  const [lastName, setLastName] = useState(selectedGuest?.lastName || "");
  const [phone, setPhone] = useState(selectedGuest?.phone || "");
  const [address, setAddress] = useState(selectedGuest?.address || "");

  // const [form, setForm] = useState(selectedGuest ? {...selectedGuest}: {...new Guest})

  const dispatch = useDispatch();
  const { setPage } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedGuest) {
      const guest = { ...selectedGuest, firstName, lastName, phone, address };

      dispatch(updateGuest(guest));
    } else {
      // const guest = new Guest(firstName, lastName, phone, address); //dapat id
      const guest = { id: nanoid(), firstName, lastName, phone, address };

      dispatch(saveGuest(guest));
    }

    dispatch(unselectGuest());
    setPage(GUEST_BOOK_PAGE.LIST);
    // update(guest);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" as={Row}>
        <Form.Label column sm="3">
          Guest First Name
        </Form.Label>
        <Col sm="9">
          <Form.Control
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" as={Row}>
        <Form.Label column sm="3">
          Guest Last Name
        </Form.Label>
        <Col sm="9">
          <Form.Control
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" as={Row}>
        <Form.Label column sm="3">
          Guest Phone Number
        </Form.Label>
        <Col sm="9">
          <Form.Control
            name="phone"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" as={Row}>
        <Form.Label column sm="3">
          Guest Address
        </Form.Label>
        <Col sm="9">
          <Form.Control
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Row>
        <Col sm="9" className="offset-sm-3">
          <Button type="submit" variant="success" size="sm">
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
