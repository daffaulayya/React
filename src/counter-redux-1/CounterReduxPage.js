import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { connect, Provider } from "react-redux";
import { counterStore } from "./counter-store";
import CounterCard from "./CounterCard";
import { COUNT_ACTIONS } from "./counter-store";

function CounterReduxPage(props) {
  const { addCard } = props;
  return (
    <>
      <Button className="px-3 me-2" variant="dark" onClick={addCard}>
        Add Card
      </Button>
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <Col sm="6">
          {/* untuk mendapatkan state dari counter reducer, harus ada provider yang diimport dari react-redux */}
          <CounterCard />
        </Col>
      </Row>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: () => dispatch({ type: COUNT_ACTIONS.ADDCARD }),
  };
};

export default connect(undefined, mapDispatchToProps)(CounterReduxPage);
