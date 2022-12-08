import { Component } from "react";
import { Button } from "react-bootstrap";
import withCounter from "./withCounter";

function CounterHoverButton(props) {
  const { number, increment, angka, label } = props;
  return (
    <>
      <Button onMouseOver={increment}>{number} Hovered</Button>
    </>
  );
}

export { CounterHoverButton as CounterHover };
export default withCounter(CounterHoverButton);
