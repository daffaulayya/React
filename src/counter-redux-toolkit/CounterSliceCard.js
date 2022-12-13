import { Card, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import counterSlice, { delCard } from "./counter-slice";
import CounterSliceButton from "./CounterSliceButton";

export default function CounterSliceCard(props) {
  const { card, title } = useSelector((store) => store[counterSlice.name]);
  const dispatch = useDispatch();

  return (
    <Row className="mb-3 p-3 d-flex justify-content-center align-items-center ">
      {card.map((count, index) => (
        <Col sm="4" className="mb-3">
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title as="h4">
                {title} {index + 1}
              </Card.Title>
              <Button variant="danger" onClick={() => dispatch(delCard(index))}>
                &times;
              </Button>
            </Card.Header>
            <Card.Body>
              <Card.Text as="h2">{count}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
              <CounterSliceButton index={index} labelPlus="+" labelMinus="-" />
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
