import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LockerPanel from "./LockerPanel";
import Alert from "react-bootstrap/Alert";

export default function LockerSlot(props) {
  return (
    <>
      <Card className="text-center">
        <Card.Header>
          <div
            style={{
              fontWeight: "bold",
              textAlign: "left",
              fontSize: "20px",
            }}
            className="d-flex justify-content-between align-items-center"
          >
            Locker {props.idx + 1}
            <Button
              variant="danger"
              disabled={props.shoes > 0 ? true : false}
              onClick={() => props.hapus(props.idx)}
            >
              &times;
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          {props.status === true ? (
            <Alert
              style={{
                fontWeight: "bold",
                textAlign: "left",
                fontSize: "20px",
              }}
              variant="danger"
            >
              LOCKED
            </Alert>
          ) : (
            <Alert variant={props.shoes < 3 ? "info" : "warning"}>
              Shoes Stored: {props.shoes}
            </Alert>
          )}
        </Card.Body>
        <Card.Footer className="text-muted">
          <LockerPanel
            putshoes={props.putshoes}
            takeshoes={props.takeshoes}
            shoes={props.shoes}
            status={props.status}
            statlock={props.statlock}
            idx={props.idx}
          />
        </Card.Footer>
      </Card>
    </>
  );
}
