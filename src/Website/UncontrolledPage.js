import { Component, createRef } from "react";
import { Button, Form } from "react-bootstrap";
class UncontrolledPage extends Component {
  constructor(props) {
    super(props);

    this.inputName = createRef();
    this.inputAge = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Name: ${this.inputName.current.value}, age: ${this.inputAge.current.value} `
    );
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input text="text" ref={this.inputName} />
          </label>
          <label>
            Age:
            <input text="text" ref={this.inputAge} />
          </label>
          <Button type="submit">Submit</Button>
        </Form>
      </>
    );
  }
}

export default UncontrolledPage;
