import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
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

const ShoeRentalForm = (props) => {
  const { getTransaction, saveTransaction: save } =
    useContext(ShoeRentalContext);
  const { openList } = props;
  const transaction = getTransaction();
  const [state, setForm] = useState({ ...transaction });

  const borrowingFee = 10000;
  const borrowingFine = 5000;
  const defectReturnFine = 10000;

  const doCalculation = (name, value) => {
    let status = state.status;
    let payment = state.payment || 0;
    let fine = state.fine || 0;
    let total = 0;

    if (name === "returnedAt") {
      const { borrowedAt, duration } = state;
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
    setForm({ ...state, [name]: value, status, payment, fine });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    save(state);
    resetForm();
  };

  const resetForm = () => {
    setForm({ ...new Transaction() });
    openList();
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
                value={state.returnedAt}
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
                value={state.condition}
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
                value={state.status}
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
                value={state.payment}
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
                value={state.fine}
                onChange={onValueChange}
              />
            </Col>
          </Form.Group>
        </Card.Body>
      );
    }
  };

  const isReturnTransactionForm = props.transaction !== undefined;

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
                value={state.shoe}
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
                value={state.wearer}
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
                value={state.borrowedAt}
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
                value={state.duration}
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
};

export default ShoeRentalForm;
