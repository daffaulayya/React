import { Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import CounterContainer from "./CounterContainer";
import { CounterConsumer, CounterProvider } from "./CounterContext";

/**
 * CounterConsumer hanya bisa ada di dalam scope CounterProvider, keturunan dari CounterProvider.
 */
const CounterPage = (props) => {
  return (
    <div>
      <CounterProvider angka={6}>
        <Row>
          <Col
            sm="12"
            className="d-flex justify-content-center align-items-center"
          >
            <CounterConsumer>
              {({ number }) => <h1>{number}</h1>}
            </CounterConsumer>
          </Col>
          <Col
            sm="12"
            className="d-flex justify-content-center align-items-center"
          >
            <CounterConsumer>
              {(data2) => (
                <>
                  <Button onClick={data2.increment}>+</Button>
                  <Button onClick={data2.decrement}>-</Button>
                </>
              )}
            </CounterConsumer>
          </Col>
          <Col
            sm="12"
            className="d-flex justify-content-center align-items-center"
          >
            <CounterContainer label="Tingkat 1">
              <CounterContainer label="Tingkat 2">
                <CounterContainer label="Tingkat 3">
                  <CounterConsumer>
                    {({
                      increment,
                      decrement,
                      setIncrementValue,
                      incrementValue,
                    }) => (
                      <InputGroup>
                        <Form.Control
                          onChange={setIncrementValue}
                          type="number"
                          placeholder="Increment Value"
                          value={incrementValue}
                        />
                        <Button onClick={increment}>Increment</Button>
                        <Button onClick={decrement}>Decrement</Button>
                      </InputGroup>
                    )}
                  </CounterConsumer>
                </CounterContainer>
              </CounterContainer>
            </CounterContainer>
          </Col>
        </Row>
      </CounterProvider>
    </div>
  );
};

export default CounterPage;
