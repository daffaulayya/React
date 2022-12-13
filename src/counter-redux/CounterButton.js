import { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { COUNT_ACTIONS } from "./Counter-Store";

function CounterButton(props) {
  const { increment, decrement, labelPlus, labelMinus, idx } = props;
  const [value, setValue] = useState(2);
  return (
    <>
      <Button onClick={() => increment(value, idx)}>{labelPlus}</Button>
      <Button onClick={() => decrement(value, idx)}>{labelMinus}</Button>
      <input value={value} onChange={(e) => setValue(e.target.value * 1)} />
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (angka, idx) =>
      dispatch({
        type: COUNT_ACTIONS.INCREMENT,
        payload: { number: angka, idx: idx },
      }),
    decrement: (angka, idx) =>
      dispatch({
        type: COUNT_ACTIONS.DECREMENT,
        payload: { number: angka, idx: idx },
      }),
    setValue: (angka) =>
      dispatch({ type: COUNT_ACTIONS.INCREMENTBYAMOUNT, payload: angka }),
  };
}

export default connect((state) => state, mapDispatchToProps)(CounterButton);
