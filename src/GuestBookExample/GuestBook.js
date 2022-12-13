import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { GUEST_BOOK_PAGE } from "./guest-model";
import GuestBookForm from "./GuestBookForm";
import GuestBookTable from "./GuestBookTable";

export default function GuestBook() {
  const [page, setPage] = useState(GUEST_BOOK_PAGE.LIST);
  return (
    <Row className="d-flex justify-content-center align-items-center vh-100">
      <Col sm="8">
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <Card.Title as="h1" className="fs-5">
              Guest Book Page
            </Card.Title>
            {page === GUEST_BOOK_PAGE.LIST && (
              <Button
                size="sm"
                variant="dark"
                onClick={() => setPage(GUEST_BOOK_PAGE.FORM)}
              >
                Add Guest
              </Button>
            )}
            {page === GUEST_BOOK_PAGE.FORM && (
              <Button
                size="sm"
                variant="outline-dark"
                onClick={() => setPage(GUEST_BOOK_PAGE.LIST)}
              >
                Return
              </Button>
            )}
          </Card.Header>
          <Card.Body>
            {page === GUEST_BOOK_PAGE.LIST && (
              <GuestBookTable setPage={setPage} />
            )}
            {page === GUEST_BOOK_PAGE.FORM && (
              <GuestBookForm setPage={setPage} />
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
