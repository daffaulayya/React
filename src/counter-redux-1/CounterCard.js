import { Button, Card, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import CounterButton from "./CounterButton";
import { COUNT_ACTIONS } from "./counter-store";

function CounterCard(props) {
  const { judul, cardSlot, deleteCard } = props;
  return (
    <>
      <Row className="mb-3 p-3 d-flex justify-content-center align-items-center ">
        {cardSlot.map((item, idx) => (
          <Col sm="4" className="mb-3">
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <Card.Title as="h4">
                  {judul} {idx + 1}
                </Card.Title>
                <Button variant="danger" onClick={() => deleteCard(idx)}>
                  &times;
                </Button>
              </Card.Header>
              <Card.Body>
                <Card.Text as="h2">{item.count}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <CounterButton idx={idx} labelPlus="+" labelMinus="-" />
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

function mapStateToProps(state) {
  return {
    judul: state.title,
    cardSlot: state.cardSlot,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (idx) =>
      dispatch({ type: COUNT_ACTIONS.DELETECARD, payload: idx }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterCard);
