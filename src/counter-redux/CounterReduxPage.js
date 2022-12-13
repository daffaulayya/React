import { connect, Provider } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import { counterStore, COUNT_ACTIONS } from "./Counter-Store";
import CounterCard from "./CounterCard";

function CounterReduxPage(props) {
  const { addCard } = props;
  return (
    <Row className="d-flex justify-content-center align-items-center ">
      <Col sm="6">
        <Button className="px-3 me-2" variant="dark" onClick={addCard}>
          Add Card
        </Button>
        {/* untuk mendapatkan state dari counter reducer, harus ada provider yang diimport dari react-redux */}
        <Provider store={counterStore}>
          <CounterCard />
        </Provider>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: () => dispatch({ type: COUNT_ACTIONS.ADDCARD }),
  };
};

export default connect(undefined, mapDispatchToProps)(CounterReduxPage);
