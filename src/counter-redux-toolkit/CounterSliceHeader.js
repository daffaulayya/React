import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCard } from "./counter-slice";

export default function CounterSliceHeader() {
  const dispatch = useDispatch();

  return (
    <Row className="mb=3 p=3 d-flex justify-content-center align-items-center">
      <Col sm="12">
        <Button onClick={() => dispatch(addCard())}>Tambah Card</Button>
      </Col>
    </Row>
  );
}
