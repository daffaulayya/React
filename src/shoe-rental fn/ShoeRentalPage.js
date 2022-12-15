import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ShoeRentalForm from "./ShoeRentalForm";
import ShoeRentalList from "./ShoeRentalList";
import { ShoeRentalProvider, ShoeRentalConsumer } from "./ShoeRentalContext";
import { Outlet } from "react-router-dom";

export default function ShoeRentalPage() {
  const [state, setState] = useState({
    page: "list",
  });

  return (
    <ShoeRentalProvider>
      <Row className="m-5 vh-100 d-flex justify-content-center align-items-center">
        <Outlet />
        {/* {state.page === "form" ? (
          <Col md="8">
            <ShoeRentalConsumer>
              {({ getTransaction, saveTransaction }) => (
                <ShoeRentalForm
                  transaction={getTransaction()}
                  save={saveTransaction}
                  openList={() => {
                    setState({ page: "list" });
                  }}
                />
              )}
            </ShoeRentalConsumer>
          </Col>
        ) : (
          <Col>
            <ShoeRentalList openForm={() => setState({ page: "form" })} />
          </Col>
        )} */}
      </Row>
    </ShoeRentalProvider>
  );
}
