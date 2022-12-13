import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { COUNT_ACTIONS } from "./Counter-Store";
import CounterButton from "./CounterButton";

function CounterCard(props) {
  const { judul, cardSlot, deleteCard } = props;

  return (
    <>
      {cardSlot.map((item, idx) => (
        <Card>
          <Card.Header>
            <div
              style={{
                fontWeight: "bold",
                textAlign: "left",
                fontSize: "20px",
              }}
              className="d-flex justify-content-between align-items-center"
            >
              {judul} {idx + 1}
              <Button variant="danger" onClick={() => deleteCard(idx)}>
                &times;
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text as="h2">{item.count}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-around align-items-center">
            <CounterButton labelPlus="+" labelMinus="-" idx={idx} />
          </Card.Footer>
        </Card>
      ))}
    </>
  );
}

function mapStateToProps(state) {
  return {
    judul: state.title,
    cardSlot: state.cardSlot,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCard: (idx) =>
      dispatch({ type: COUNT_ACTIONS.DELETECARD, payload: idx }),
  };
}

const hocConnect = connect(mapStateToProps, mapDispatchToProps);

export default hocConnect(CounterCard);
