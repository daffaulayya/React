/**
 * Render Props
 * 1. Suatu props yang berbentuk function, yang akan menerima 1 atau lebih parameter, dan mengembalikan 1 atau lebih Component
 */

import { Component } from "react";

class CounterRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  increment = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    const { children } = this.props;
    return <>{children(this.state.number, this.increment)}</>;
  }
}

export default CounterRender;
