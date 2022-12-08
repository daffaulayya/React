import { Button, Col, Row } from "react-bootstrap";
import { initialState, counterReducer } from "./Reducer";
import { useReducer } from "react";

const CounterReducerPageHover = () => {
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
    <Row>
      <Col
        sm="12"
        classname="vh-100 d-flex justify-content-center align-items-center"
      >
        {state.count}
      </Col>
      <Col sm="12" classname="d-flex justify-content-center align-items-center">
        <Button onMouseOver={increment} classname="mx-2 px-5">
          +
        </Button>
        <Button onMouseOver={decrement} classname="mx-2 px-5">
          -
        </Button>
        <Button onMouseOver={multiply} classname="mx-2 px-5">
          *
        </Button>
        <Button onMouseOver={devide} classname="mx-2 px-5">
          /
        </Button>
        <Button variant="warning" onMouseOver={reset} classname="mx-2 px-5">
          reset
        </Button>
      </Col>
    </Row>
  );
};

export default CounterReducerPageHover;
