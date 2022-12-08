import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import GuestBookForm from "./GuestBookForm";
import GuestBookList from "./GuestBookList";

export default class GuestBookPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "List",
      guests: [],
      idx: undefined,
      editing: {
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
      },
    };

    this.saveGuest = this.saveGuest.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  setPage(page) {
    this.setState({ page });
  }

  saveGuest(guest, idx) {
    if (idx !== undefined) {
      const newArr = [...this.state.guests];
      newArr.splice(idx, 1, guest);
      this.setState({
        guests: newArr,
        idx: undefined,
        page: "list",
      });
    } else {
      this.setState({
        guests: [...this.state.guests, guest],
        idx: idx,
        page: "list",
      });
    }
    console.log("guestbookpage:", guest);
  }

  editForm(form, idx) {
    this.setState({
      editing: form,
      idx: idx,
      page: "form",
    });
  }

  render() {
    const { page, guests } = this.state;
    console.log(this.state);
    return (
      <>
        <Row className="p-3">
          <Col sm="12" className="mb-3">
            <Button className="me-3" onClick={() => this.setPage("form")}>
              Open Form
            </Button>

            <Button onClick={() => this.setPage("list")}>Open List</Button>
          </Col>
          <Col sm="12">
            {page === "list" ? (
              <GuestBookList guests={this.state.guests} edit={this.editForm} />
            ) : (
              <GuestBookForm
                saveGuest={this.saveGuest}
                edit={this.state.editing}
                idx={this.state.idx}
              />
            )}
          </Col>
        </Row>
      </>
    );
  }
}
