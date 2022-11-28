import { Button } from "react-bootstrap";

export default function LockerPanel(props) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <div className={props.status === true ? "d-none" : ""}>
            <Button
              variant="primary"
              disabled={props.shoes >= 3 ? true : false}
              onClick={() => props.putshoes(props.idx)}
            >
              PutShoes
            </Button>
            <Button
              variant="primary"
              disabled={props.shoes <= 0 ? true : false}
              onClick={() => props.takeshoes(props.idx)}
            >
              TakeShoes
            </Button>
          </div>
        </div>
        <div>
          <Button
            variant={props.status === true ? "dark" : "light"}
            onClick={() => props.statlock(props.idx)}
          >
            {props.status === true ? "Unlock" : "Lock"}
          </Button>
        </div>
      </div>
    </>
  );
}
