import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import AnakPertama from "./AnakPertama";

const StateFunctionSample = () => {
  const [state, setState] = useState({ firstName: "", lastName: "" });
  const [teman, setTeman] = useState(["George"]);
  console.log("Rendering Component", StateFunctionSample);

  return (
    <Card>
      <Card.Header>
        <Card.Title>State Func Component</Card.Title>
      </Card.Header>
      <Card.Body>
        <p className="text-center">
          {state.firstName} {state.lastName}
        </p>
        <AnakPertama />
        <p>Temannya:</p>
        <ul>
          {teman.map((tmn) => (
            <li>{tmn}</li>
          ))}
        </ul>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center align-items-center">
        <Button onClick={() => setState({ firstName: "John" })}>
          Change First Name
        </Button>
        <Button onClick={() => setState({ lastName: "Cena" })}>
          Change Last Name
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default StateFunctionSample;
