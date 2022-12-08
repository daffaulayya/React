import { createContext, useState } from "react";
import { Transaction } from "./ShoeRentalForm";

const ShoeRentalContext = createContext();
const { Provider, Consumer: ShoeRentalConsumer } = ShoeRentalContext;

function ShoeRentalProvider(props) {
  const [filter, setFilter] = useState(undefined);
  const [transactionId, setTransactionId] = useState(undefined);
  const [transactions, setTransaction] = useState([
    new Transaction("Nike 1", "John", 1, 1),
    new Transaction("Nike 2", "Jane", 2, 1),
    new Transaction("Nike 3", "James", 3, 1),
  ]);

  const saveTransaction = (transaction) => {
    if (transactionId) {
      setTransaction(undefined);
      setTransaction(
        transactions.map((trx) => {
          if (trx.id === transactionId) {
            trx = { ...transaction };
          }
          return trx;
        })
      );
    } else {
      setTransaction([...transactions, transaction]);
    }
  };

  const getTransaction = () => {
    if (transactionId) {
      return transactions.find((trx) => trx.id === transactionId);
    }
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const { children } = props;
  const value = {
    transactions: transactions,
    transactionId: transactionId,
    filter: filter,
    saveTransaction: saveTransaction,
    selectTransaction: setTransactionId,
    setFilter: changeFilter,
    getTransaction: getTransaction,
  };

  return <Provider value={value}>{children}</Provider>;
}

export { ShoeRentalProvider, ShoeRentalConsumer };
export default ShoeRentalContext;
