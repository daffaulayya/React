import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement } from "./counter-slice";

export default function CounterSliceButton(props) {
  const dispatch = useDispatch();
  const { labelPlus, labelMinus, index } = props;
  const [incrementValue, setIncrementValue] = useState(2);
  const [decrementValue, setDecrementValue] = useState(2);
  return (
    <>
      <InputGroup className="me-3">
        <Form.Control
          placeholder="Set Increment"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value * 1)}
        />
        <Button onClick={() => dispatch(increment({ incrementValue, index }))}>
          {labelPlus}
        </Button>
        <Form.Control
          placeholder="Set Decrement"
          value={decrementValue}
          onChange={(e) => setDecrementValue(e.target.value * 1)}
        />
        <Button onClick={() => dispatch(decrement({ decrementValue, index }))}>
          {labelMinus}
        </Button>
      </InputGroup>
    </>
  );
}
