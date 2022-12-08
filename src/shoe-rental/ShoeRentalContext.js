import { Component, createContext } from "react";
import { Transaction } from "./ShoeRentalForm";

const { Provider, Consumer: ShoeRentalConsumer } = createContext();

class ShoeRentalProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: undefined,
      transactionId: undefined,
      transactions: [
        new Transaction("Nike 1", "John", 1, 1),
        new Transaction("Nike 2", "Jane", 2, 1),
        new Transaction("Nike 3", "Moon", 3, 1),
      ],
    };

    this.saveTransaction = this.saveTransaction.bind(this);
    this.selectTransactionId = this.selectTransactionId.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.getTransaction = this.getTransaction.bind(this);
  }

  saveTransaction(transaction) {
    const { transactionId, transactions } = this.state;
    if (transactionId) {
      this.setState({
        transactionId: undefined,
        transactions: transactions.map((trx) => {
          if (trx.id === transactionId) {
            trx = { ...transaction };
          }

          return trx;
        }),
      });
    } else {
      this.setState({ transactions: [...transactions, transaction] });
    }
  }

  selectTransactionId(transactionId) {
    this.setState({ transactionId });
  }

  setFilter({ target: { value: filter } }) {
    this.setState({ filter });
  }

  getTransaction() {
    const { transactions, transactionId } = this.state;

    if (transactionId) {
      return transactions.find((trx) => trx.id === transactionId);
    }
  }

  render() {
    const { children } = this.props;
    const value = {
      transactions: this.state.transactions,
      transactionId: this.state.transactionId,
      filter: this.state.filter,
      saveTransaction: this.saveTransaction,
      selectTransaction: this.selectTransactionId,
      setFilter: this.setFilter,
      getTransaction: this.getTransaction,
    };

    return <Provider value={value}>{children}</Provider>;
  }
}

export { ShoeRentalProvider, ShoeRentalConsumer };
