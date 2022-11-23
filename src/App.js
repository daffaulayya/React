import logo from "./logo.svg";
import "./App.css";
import { Hello, HelloClass } from "./intro/Hello";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Hello />
        </Col>
        <Col>
          <HelloClass />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
