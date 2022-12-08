import { Component, createRef } from "react";
import { InputGroup, Card, Form, Row, Col, Button } from "react-bootstrap";

class GuestBookForm extends Component {
  constructor(props) {
    super(props);

    /**
     * Controlled Component
     * 1. Perbedaannya jika yang controlled menggunakan state
     * 2. Harus ada handler onChange
     *
     * Uncontrolled Component
     * 1. Uncontrolled menggunakan ref (createRef)
     */
    this.state = {
      firstName: props.edit.firstName || "",
      lastName: props.edit.lastName || "",
      phone: props.edit.phone || "",
      address: props.edit.address || "",
    };

    this.emailRef = createRef();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleOnChange2 = this.handleOnChange2.bind(this);
  }

  /**
   * Event
   */
  handleOnChange(event) {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    // const value = event.target.value; // ini jika memasukan 2 state jadi 1 fungsi method
    // this.setState({ ...this.state, [event.target.name]: value }); // ini array namanya dynamic object value [] (intinya suatu key bisa diberinama di variable lain)
    // console.log(event.target.value);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log("Guest", this.state);
    if (this.props.idx !== undefined) {
      this.props.saveGuest(this.state, this.props.idx);
    } else {
      this.props.saveGuest(this.state);
    }
  }

  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title as="h5">Form Buku Tamu</Card.Title>
        </Card.Header>
        <Form onSubmit={this.handleFormSubmit}>
          <Card.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Nama Depan
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleOnChange}
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Nama Belakang
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleOnChange}
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Nomor Telpon
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  value={this.state.phone}
                  onChange={this.handleOnChange}
                  name="phone"
                  placeholder="Phone"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Alamat
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  value={this.state.address}
                  onChange={this.handleOnChange}
                  name="address"
                  placeholder="Address"
                  required
                />
              </Col>
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col sm="9" className="offset-3">
                <Button type="submit">Save</Button>
              </Col>
            </Row>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}

export default GuestBookForm;
