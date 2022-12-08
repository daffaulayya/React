import { Button, ButtonGroup } from "react-bootstrap";

export default function LockerPanel(props) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <ButtonGroup>
          <div className={props.status === true ? "d-none" : ""}>
            <Button
              variant="primary"
              size="sm"
              disabled={props.shoes >= 3 ? true : false}
              onClick={() => props.putshoes(props.idx)}
            >
              PutShoes
            </Button>
            <Button
              variant="primary"
              size="sm"
              disabled={props.shoes <= 0 ? true : false}
              onClick={() => props.takeshoes(props.idx)}
            >
              TakeShoes
            </Button>
          </div>
        </ButtonGroup>

        <div>
          <Button
            variant={props.status === true ? "dark" : "light"}
            size="sm"
            onClick={() => props.statlock(props.idx)}
          >
            {props.status === true ? "Unlock" : "Lock"}
          </Button>
        </div>
      </div>
    </>
  );
}
