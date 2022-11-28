import { Button } from "react-bootstrap";

export default function LatihanButtonMinus(props) {
  return (
    <Button
      disabled={props.status}
      onClick={() => props.minus(props.idx, props.decrement)}
      variant="dark"
      className="px-5 py-2"
    >
      -{props.decrement}
    </Button>
  );
}
