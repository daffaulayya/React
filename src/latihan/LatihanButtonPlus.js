import { Button } from "react-bootstrap";

export default function LatihanButtonPlus(props) {
  return (
    <Button
      disabled={props.status}
      onClick={() => props.plus(props.idx, props.increment)}
      variant="dark"
      className="px-5 py-2"
    >
      +{props.increment}
    </Button>
  );
}
