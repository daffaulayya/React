import { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import AddCard from "./AddCard";
import LatihanButtonMinus from "./LatihanButtonMinus";
import LatihanButtonPlus from "./LatihanButtonPlus";
import LatihanCard from "./LatihanCard";

export default class LatihanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angka: [0, 0],
    };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }
  plus(idx, tambah) {
    const tampungTambah = [...this.state.angka];
    tampungTambah[idx] = tampungTambah[idx] + tambah;
    this.setState({
      angka: tampungTambah,
    });
  }
  minus(idx, kurang) {
    const tampungKurang = [...this.state.angka];
    tampungKurang[idx] = tampungKurang[idx] - kurang;
    this.setState({
      angka: tampungKurang,
    });
  }

  addCard() {
    const tampung = [...this.state.angka];
    tampung.push(0);
    this.setState({
      angka: tampung,
    });
  }

  deleteCard(idx) {
    const hapus = [...this.state.angka];
    hapus.splice(idx, 1);
    this.setState({
      angka: hapus,
    });
  }

  render() {
    return (
      <>
        <Button onClick={this.addCard}>Tambah Card</Button>
        {this.state.angka.map((item, idx) => {
          return (
            <Row className=" d-flex justify-content-center align-items-center">
              <Col sm="2">
                <Row>
                  <Col sm="12">
                    <LatihanCard
                      deleteCard={this.deleteCard}
                      angka={item}
                      idx={idx}
                    />
                  </Col>
                  <Col
                    sm="12"
                    className="d-flex justify-content-between align-items-center py-3"
                  >
                    <LatihanButtonPlus
                      status={item >= 20 ? true : false}
                      plus={this.plus}
                      increment={this.props.increment}
                      idx={idx}
                    />
                    <LatihanButtonMinus
                      status={item <= 0 ? true : false}
                      minus={this.minus}
                      decrement={this.props.decrement}
                      idx={idx}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      </>
    );
  }
}
