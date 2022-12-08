import { useContext } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import ShoeRentalContext from "./ShoeRentalContext";
import { TransactionStatus } from "./ShoeRentalForm";

export default function ShoeRentalList(props) {
  const rentalContextValue = useContext(ShoeRentalContext);
  const { filter, setFilter, selectTransaction } = rentalContextValue;
  const { openForm } = props;
  let { transactions } = rentalContextValue;

  if (filter) {
    transactions = transactions.filter(
      (trx) => filter && trx.status === filter
    );
  }

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Card.Title as="h2">Shoe Rental Transactions</Card.Title>
        <Button size="sm" onClick={openForm}>
          Rent Shoes
        </Button>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Form.Select name="status" value={filter} onChange={setFilter}>
              <option value="">Filter by status</option>
              <option value={TransactionStatus.BORROWED}>Borrowed</option>
              <option value={TransactionStatus.RETURNED}>Returned</option>
              <option value={TransactionStatus.LATE}>Late</option>
            </Form.Select>
          </Col>
        </Row>
      </Card.Body>
      <Card.Body className="p-0">
        <Table hover striped bordered responsive className="m-0">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Shoe</th>
              <th>Wearer</th>
              <th>Duration</th>
              <th>Borrowing Day</th>
              <th>Returning Day</th>
              <th>Payment</th>
              <th>Fine</th>
              <th>Shoe Condition</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(transactions) && transactions.length === 0 ? (
              <tr>
                <td colSpan={11} className="text-center fw-bold">
                  No Transaction
                </td>
              </tr>
            ) : (
              transactions.map((trx, index) => (
                <tr key={trx.id}>
                  <td>{index + 1}</td>
                  <td>{trx.shoe}</td>
                  <td>{trx.wearer}</td>
                  <td>{trx.duration} day(s)</td>
                  <td>{trx.borrowedAt}</td>
                  <td>{trx.returnedAt || "-"}</td>
                  <td>{trx.payment || "-"}</td>
                  <td>{trx.fine || "-"}</td>
                  <td>{trx.condition || "-"}</td>
                  <td>{trx.status}</td>
                  <td>
                    {trx.status === TransactionStatus.BORROWED ? (
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => {
                          selectTransaction(trx.id);
                          openForm();
                        }}
                      >
                        Return Shoes
                      </Button>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
