import { Component } from "react";
import { Button } from "react-bootstrap";
import { people } from "./People";
import { Row, Col } from "react-bootstrap";
import PeopleList from "./PeopleList";

export default class PeopleView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true,
      page: "List",
      counter: 0,
      people: [...people],
      someone: null,
    };
    this.toggleIsActive = this.toggleIsActive.bind(this);
    this.pickSomeone = this.pickSomeone.bind(this);
  }

  toggleIsActive() {
    this.setState((prevState) => ({
      ...prevState,
      isActive: !prevState.isActive,
    }));
  }

  pickSomeone(someone) {
    this.setState({ someone });
    console.log(someone);
  }

  render() {
    console.log(this.state); //akan ngeprint 2x di log karena pengaruh <React.StrictMode> di index.js sebagai pengamanan saat development.

    return (
      <Row className="">
        <Col
          sm="12"
          className="d-flex justify-content-center align-item-center "
        >
          <h2> You click: {this.state.someone}</h2>
          <Button onClick={this.toggleIsActive}>
            Is Active: {this.state.isActive ? "true" : "false"}
          </Button>
        </Col>
        <Col sm="12">
          <PeopleList
            people={this.state.people}
            pickSomeone={this.pickSomeone}
          />
        </Col>
      </Row>
    );
  }
}
