import { Component, createContext } from "react";

/**
 * Context
 * 1. Dibuat dengan memanggil fungsi createContext dari react.
 * 2. Akan menghasilkan 2 komponen, yaitu Provider dan Consumer.
 * 3. Provider bertugas sebagai state manager.
 * 4. Consumer bertugas sebagai meneruskan data dan fungsi yang ada di provider, lewat render props.
 */
const CounterContext = createContext();
const { Provider, Consumer: CounterConsumer } = CounterContext;

class CounterProvider extends Component {
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

  setIncrementValue = (e) => {
    this.setState({ incrementValue: Number(e.target.value) });
  };

  decrement = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    const { children } = this.props;
    const value = {
      //   number: this.state.number,
      increment: this.increment,
      decrement: this.decrement,
      setIncrementValue: this.setIncrementValue,
      ...this.state,
    };

    // CounterProvider akan memiliki value berupa object, yg terdiri dari property number, increment, dan decrement
    return <Provider value={value}>{children}</Provider>;
  }
}

export { CounterProvider, CounterConsumer };
