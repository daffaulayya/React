import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Locker from "./Locker";
import LockerSlot from "./LockerSlot";

export default class LockerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lockers: [new Locker()],
    };

    this.removeLocker = this.removeLocker.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
    this.putShoes = this.putShoes.bind(this);
    this.takeShoes = this.takeShoes.bind(this);
  }

  toggleLock(index) {
    const statlock = [...this.state.lockers];
    statlock[index].isLocked = !statlock[index].isLocked;
    this.setState({
      lockers: statlock,
    });
  }

  putShoes(index) {
    const tambahSepatu = [...this.state.lockers];
    tambahSepatu[index].shoes = tambahSepatu[index].shoes + 1;
    this.setState({
      lockers: tambahSepatu,
    });
  }

  takeShoes(index) {
    const kurangSepatu = [...this.state.lockers];
    kurangSepatu[index].shoes = kurangSepatu[index].shoes - 1;
    this.setState({
      lockers: kurangSepatu,
    });
  }

  addLocker(statLock) {
    const add = [...this.state.lockers];
    add.push(new Locker());
    if (statLock) {
      add[add.length - 1].isLocked = true;
    }
    this.setState({
      lockers: add,
    });
  }

  removeLocker(index) {
    const hapus = [...this.state.lockers];
    hapus.splice(index, 1);
    this.setState({
      lockers: hapus,
    });
  }

  render() {
    return (
      <>
        <h1
          style={{
            paddingTop: "10px",
          }}
        >
          Locker
        </h1>
        <Col>
          <Button
            className="px-3 me-2"
            variant="dark"
            onClick={() => this.addLocker(false)}
          >
            Add Locker
          </Button>
          <Button
            className="px-3 me-2"
            variant="warning"
            onClick={() => this.addLocker(true)}
          >
            Add Locked Locker
          </Button>
        </Col>

        <Row md="3" sm="2">
          {this.state.lockers.map((objLockers, idx) => {
            return (
              <Col>
                <LockerSlot
                  shoes={objLockers.shoes}
                  status={objLockers.isLocked}
                  hapus={this.removeLocker}
                  putshoes={this.putShoes}
                  takeshoes={this.takeShoes}
                  statlock={this.toggleLock}
                  idx={idx}
                />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}
