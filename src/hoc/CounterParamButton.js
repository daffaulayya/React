import { Button, Form, InputGroup } from "react-bootstrap";
import withCounter from "./withCounter";

function CounterParamButton(props) {
  const { number, incrementValue, setIncrementValue, decrement, increment } =
    props;

  return (
    <>
      <InputGroup>
        <Form.Control
          onChange={setIncrementValue}
          type="number"
          placeholder="Increment Value"
          value={incrementValue}
        />
        <InputGroup.Text>{number}</InputGroup.Text>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </InputGroup>
    </>
  );
}

export default withCounter(CounterParamButton);
