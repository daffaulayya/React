import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import ShoeRentalForm from "./ShoeRentalForm";
import ShoeRentalList from "./ShoeRentalList";
import { ShoeRentalProvider, ShoeRentalConsumer } from "./ShoeRentalContext";

export default class ShoeRentalPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "list",
    };
  }

  openPage(page) {
    this.setState({ page });
  }

  render() {
    return (
      <ShoeRentalProvider>
        <Row className="m-5 vh-100 d-flex justify-content-center align-items-center">
          {this.state.page === "form" ? (
            <Col md="8">
              <ShoeRentalConsumer>
                {({ getTransaction, saveTransaction }) => (
                  <ShoeRentalForm
                    transaction={getTransaction()}
                    save={saveTransaction}
                    openList={() => {
                      this.openPage("list");
                    }}
                  />
                )}
              </ShoeRentalConsumer>
            </Col>
          ) : (
            <Col>
              <ShoeRentalList openForm={() => this.openPage("form")} />
            </Col>
          )}
        </Row>
      </ShoeRentalProvider>
    );
  }
}
