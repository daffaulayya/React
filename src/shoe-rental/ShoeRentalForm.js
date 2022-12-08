import { nanoid } from "nanoid";
import { Component } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export const TransactionStatus = {
  BORROWED: "Borrowed",
  RETURNED: "Returned",
  LATE: "Late",
};

export const ShoeCondition = {
  GOOD: "Good",
  DEFECT: "Defect",
};

export class Transaction {
  constructor(
    shoe,
    wearer,
    duration,
    borrowedAt,
    returnedAt,
    payment,
    fine,
    condition,
    status
  ) {
    this.id = nanoid();
    this.shoe = shoe || "";
    this.wearer = wearer || "";
    this.duration = duration || 0;
    this.borrowedAt = borrowedAt || new Date().getDate();
    this.returnedAt = returnedAt || "";
    this.payment = payment || "";
    this.fine = fine || "";
    this.condition = condition || "";
    this.status = status || TransactionStatus.BORROWED;
  }
}

export default class ShoeRentalForm extends Component {
  constructor(props) {
    super(props);

    const { transaction = new Transaction() } = props;
    this.state = {
      ...transaction,
    };

    this.borrowingFee = 10000;
    this.borrowingFine = 5000;
    this.defectReturnFine = 10000;

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  doCalculation(name, value) {
    let status = this.state.status;
    let payment = this.state.payment || 0;
    let fine = this.state.fine || 0;
    let total = 0;

    if (name === "returnedAt") {
      const { borrowedAt, duration } = this.state;
      const returnedAt = value;

      total = duration * this.borrowingFee;

      if (returnedAt - borrowedAt > duration) {
        fine = (returnedAt - borrowedAt - duration) * this.borrowingFine;
        payment = total + fine;
        status = TransactionStatus.LATE;
      } else {
        status = TransactionStatus.RETURNED;
        payment = total;
      }
    }

    if (name === "condition") {
      if (value === ShoeCondition.DEFECT) {
        payment += this.defectReturnFine;
        fine += this.defectReturnFine;
      }
    }

    return {
      status,
      payment,
      fine,
    };
  }

  onValueChange({ target: { name, value } }) {
    const { status, payment, fine } = this.doCalculation(name, value);
    this.setState({ ...this.state, [name]: value, status, payment, fine });
  }

  onSubmit(event) {
    event.preventDefault();

    const { save } = this.props;

    save(this.state);
    this.resetForm();
  }

  resetForm() {
    this.setState({ ...new Transaction() });
    this.props.openList();
  }

  buildReturnForm() {
    const { transaction } = this.props;

    if (transaction) {
      return (
        <Card.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="12" className="fw-bold">
              Returning Form
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Returning Day
            </Form.Label>
            <Col md="9">
              <Form.Control
                type="number"
                name="returnedAt"
                placeholder="Enter returning day"
                value={this.state.returnedAt}
                onChange={this.onValueChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Shoe Condition
            </Form.Label>
            <Col md="9">
              <Form.Select
                name="condition"
                value={this.state.condition}
                onChange={this.onValueChange}
              >
                <option>Select Shoe Condition</option>
                <option value={ShoeCondition.GOOD}>Good</option>
                <option value={ShoeCondition.DEFECT}>Defect</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Status
            </Form.Label>
            <Col md="9">
              <Form.Control
                type="text"
                name="status"
                disabled
                value={this.state.status}
                onChange={this.onValueChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Payment
            </Form.Label>
            <Col md="9">
              <Form.Control
                type="number"
                name="payment"
                disabled
                value={this.state.payment}
                onChange={this.onValueChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Fine
            </Form.Label>
            <Col md="9">
              <Form.Control
                type="number"
                name="fine"
                disabled
                value={this.state.fine}
                onChange={this.onValueChange}
              />
            </Col>
          </Form.Group>
        </Card.Body>
      );
    }
  }

  render() {
    const isReturnTransactionForm = this.props.transaction !== undefined;

    return (
      <Card>
        <Card.Header>
          <Card.Title as="h2">Transaction Form</Card.Title>
        </Card.Header>
        <Form onSubmit={this.onSubmit}>
          <Card.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Shoe Name
              </Form.Label>
              <Col md="9">
                <Form.Control
                  type="text"
                  name="shoe"
                  placeholder="Enter shoe name"
                  value={this.state.shoe}
                  disabled={isReturnTransactionForm}
                  onChange={this.onValueChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Shoe Wearer
              </Form.Label>
              <Col md="9">
                <Form.Control
                  type="text"
                  name="wearer"
                  placeholder="Enter wearer name"
                  value={this.state.wearer}
                  disabled={isReturnTransactionForm}
                  onChange={this.onValueChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Borrowing Day
              </Form.Label>
              <Col md="9">
                <Form.Control
                  type="number"
                  name="borrowedAt"
                  placeholder="Enter borrowing day"
                  value={this.state.borrowedAt}
                  disabled={isReturnTransactionForm}
                  onChange={this.onValueChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Duration
              </Form.Label>
              <Col md="9">
                <Form.Select
                  name="duration"
                  value={this.state.duration}
                  disabled={isReturnTransactionForm}
                  onChange={this.onValueChange}
                >
                  <option>Select Borrowing Duration</option>
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Card.Body>
          {this.buildReturnForm()}
          <Card.Footer>
            <Col md="9" className="offset-3">
              <Button
                type="submit"
                variant="success"
                size="sm"
                className="px-3 me-3"
              >
                Save
              </Button>
              <Button
                type="reset"
                size="sm"
                className="px-3"
                onClick={this.resetForm}
              >
                Return
              </Button>
            </Col>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
