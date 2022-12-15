import { Component, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ShoeRentalProvider, ShoeRentalConsumer } from "./ShoeRentalContext";
import { Outlet } from "react-router-dom";

export default function ShoeRentalPageFn(props) {
  const [state, setState] = useState({ page: "list" });

  return (
    <ShoeRentalProvider>
      <Row className="m-5 vh-90 d-flex justify-content-center align-items-center">
        <Col>
          <Outlet />
        </Col>
      </Row>
    </ShoeRentalProvider>
  );
}
