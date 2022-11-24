import "./App.css";
import { Hello, HelloClass } from "./intro/Hello";
import { Col, Container, Row } from "react-bootstrap";
import CetakTable from "./intro/CetakTable";
import People from "./intro/people";

function App() {
  let name = "suhendra";
  let mobil = {
    brand: "toyota",
    name: "rush",
  };
  let greet = () => {
    const word = "Terimakasih";
    return word;
  };

  function CobaCetak() {
    return (
      <div>
        <p>Coba Cetak</p>;
      </div>
    );
  }

  // let mobil2 = { ...mobil };
  return (
    <Container fluid>
      <Row>
        <Col>
          <Hello
            name={name}
            job={"Aktor"}
            greet={greet}
            gender={"Male"}
            mobil={{ ...mobil }}
          />
        </Col>
        <Col>
          <HelloClass
            Hello={Hello}
            helloCoba={CobaCetak}
            mobil={mobil}
            greet={greet}
          >
            <CobaCetak />
          </HelloClass>
        </Col>
        <Col>
          <CetakTable />
        </Col>
        <Row>
          <People />
        </Row>
      </Row>
    </Container>
  );
}

export default App;
