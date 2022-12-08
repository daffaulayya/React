import { useReducer } from "react";
import { counterReducer, initialState } from "./Reducer";
import { Button, Col, Row } from "react-bootstrap";
import CounterReducerPageHover from "./CounterReducerPageHover";

const CounterReducerPage = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const increment = () => {
    dispatch({ type: "increment", payload: 1 });
  };
  const decrement = () => {
    dispatch({ type: "decrement", payload: 1 });
  };

  const multiply = () => {
    dispatch({ type: "multiply", payload: 2 });
  };
  const devide = () => {
    dispatch({ type: "devide", payload: 2 });
  };

  const reset = () => {
    dispatch({ type: "reset", payload: initialState });
  };

  return (
    <>
      <Row>
        <Col
          sm="12"
          classname="vh-100 d-flex justify-content-center align-items-center"
        >
          {state.count}
        </Col>
        <Col
          sm="12"
          classname="d-flex justify-content-center align-items-center"
        >
          <Button onClick={increment} classname="mx-2 px-5">
            +
          </Button>
          <Button onClick={decrement} classname="mx-2 px-5">
            -
          </Button>
          <Button onClick={multiply} classname="mx-2 px-5">
            *
          </Button>
          <Button onClick={devide} classname="mx-2 px-5">
            /
          </Button>
          <Button variant="warning" onClick={reset} classname="mx-2 px-5">
            reset
          </Button>
        </Col>
      </Row>
      <CounterReducerPageHover />
    </>
  );
};

export default CounterReducerPage;
