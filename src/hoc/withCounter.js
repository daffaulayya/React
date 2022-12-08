/**
 * HoC : Higher-order Component
 * 1. HoC adalah sebuah component juga, yang akan membungkus komponen targetnya (anaknya).
 * 2. Sebuah component yang ditambahkan component HoC, akan menerima tambahan fitur.
 * 3. Setiap child component mendapat state sendiri-sendiri
 */

import { Component } from "react";

// ChildComponent => CounterClickButton atau CounterHoverButton
export default function withCounter(ChildComponent) {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        number: 0,
        incrementValue: 1,
      };
    }

    increment = () => {
      this.setState({ number: this.state.number + this.state.incrementValue });
    };

    decrement = () => {
      let res = this.state.number - this.state.incrementValue;
      res = res > 0 ? res : 0;
      this.setState({
        number: res,
      });
    };

    setIncrementValue = (e) => {
      this.setState({ incrementValue: Number(e.target.value) });
    };

    render() {
      return (
        <ChildComponent
          number={this.state.number}
          setIncrementValue={this.setIncrementValue}
          decrement={this.decrement}
          incremenetValue={this.state.incrementValue}
          increment={this.increment}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
}
