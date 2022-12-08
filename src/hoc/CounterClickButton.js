import { Component } from "react";
import { Button } from "react-bootstrap";
import withCounter from "./withCounter";

class CounterClickButton extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       number: 0,
  //     };
  //   }

  render() {
    const { number, increment } = this.props;
    return (
      <>
        <Button onClick={increment}>
          {number} Clicked {this.props.angka}
        </Button>
      </>
    );
  }
}

export { CounterClickButton as CounterClick };
// export default CounterClickButton;
export default withCounter(CounterClickButton);
