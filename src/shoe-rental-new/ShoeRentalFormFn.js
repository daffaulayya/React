import { nanoid } from "nanoid";
import { Component, useContext, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ShoeRentalContext from "./ShoeRentalContext";

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

export default function ShoeRentalForm(props) {
  const { getTransaction, saveTransaction: save } =
    useContext(ShoeRentalContext);
  const { openList } = props;
  // const [form, setForm] = useState(new Transaction());
  const params = useParams();
  const navigate = useNavigate();
  const transaction = getTransaction(params.id);
  const [form, setForm] = useState(transaction || new Transaction());

  const borrowingFee = 10000;
  const borrowingFine = 5000;
  const defectReturnFine = 10000;

  const doCalculation = (name, value) => {
    let status = form.status;
    let payment = form.payment || 0;
    let fine = form.fine || 0;
    let total = 0;

    if (name === "returnedAt") {
      const { borrowedAt, duration } = form;
      const returnedAt = value;

      total = duration * borrowingFee;

      if (returnedAt - borrowedAt > duration) {
        fine = (returnedAt - borrowedAt - duration) * borrowingFine;
        payment = total + fine;
        status = TransactionStatus.LATE;
      } else {
        status = TransactionStatus.RETURNED;
        payment = total;
      }
    }

    if (name === "condition") {
      if (value === ShoeCondition.DEFECT) {
        payment += defectReturnFine;
        fine += defectReturnFine;
      } else {
        if (form.condition === ShoeCondition.DEFECT) {
          payment -= defectReturnFine;
          fine -= doCalculation;
        }
      }
    }

    return {
      status,
      payment,
      fine,
    };
  };

  const onValueChange = ({ target: { name, value } }) => {
    const { status, payment, fine } = doCalculation(name, value);
    setForm({ ...form, [name]: value, status, payment, fine });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    save(form);
    resetForm();
  };

  const resetForm = () => {
    setForm({ ...new Transaction() });
    navigate("/shoe-rental");
  };

  const buildReturnForm = () => {
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
                value={form.returnedAt}
                onChange={onValueChange}
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
                value={form.condition}
                onChange={onValueChange}
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
                value={form.status}
                onChange={onValueChange}
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
                value={form.payment}
                onChange={onValueChange}
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
                value={form.fine}
                onChange={onValueChange}
              />
            </Col>
          </Form.Group>
        </Card.Body>
      );
    }
  };

  const isReturnTransactionForm = transaction !== undefined;

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h2">Transaction Form</Card.Title>
      </Card.Header>
      <Form onSubmit={onSubmit}>
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
                value={form.shoe}
                disabled={isReturnTransactionForm}
                onChange={onValueChange}
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
                value={form.wearer}
                disabled={isReturnTransactionForm}
                onChange={onValueChange}
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
                value={form.borrowedAt}
                disabled={isReturnTransactionForm}
                onChange={onValueChange}
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
                value={form.duration}
                disabled={isReturnTransactionForm}
                onChange={onValueChange}
              >
                <option>Select Borrowing Duration</option>
                <option value="1">1 Day</option>
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Card.Body>
        {buildReturnForm()}
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
            <Button type="reset" size="sm" className="px-3" onClick={resetForm}>
              Return
            </Button>
          </Col>
        </Card.Footer>
      </Form>
    </Card>
  );
}
