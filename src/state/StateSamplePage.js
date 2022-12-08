import StateClassSample from "./StateClassSample";
import StateFunctionSample from "./StateFunctionSample";
import { Col, Row } from "react-bootstrap";

export default function StateSamplePage() {
  return (
    <Row>
      <Col>
        <StateClassSample />
      </Col>
      <StateFunctionSample />
    </Row>
  );
}
