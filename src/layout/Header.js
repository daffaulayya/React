import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Row as="header">
      <Col>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">React App</Navbar.Brand>
            <Navbar.Collapse>
              <Nav>
                <Nav.Link as={Link} to="guestbook">
                  Guest Book
                </Nav.Link>
                <Nav.Link as={Link} to="shoe-rental">
                  Shoe Rental
                </Nav.Link>
                <Nav.Link as={Link} to="counter">
                  Counter
                </Nav.Link>
                <Nav.Link as={Link} to="locker">
                  Locker
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
}
