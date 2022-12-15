import { nanoid } from "@reduxjs/toolkit";
import { createContext, useState } from "react";
import { Transaction } from "./ShoeRentalForm";

const ShoeRentalContext = createContext();
const { Provider, Consumer: ShoeRentalConsumer } = ShoeRentalContext;

function ShoeRentalProvider(props) {
  const [filter, setFilter] = useState(undefined);
  const [transactionId, setTransactionId] = useState(undefined);
  const [transactions, setTransaction] = useState([]);

  const saveTransaction = (transaction) => {
    if (transaction.id) {
      setTransaction(undefined);
      setTransaction(
        transactions.map((trx) => {
          if (trx.id === transaction.id) {
            trx = { ...transaction };
          }
          return trx;
        })
      );
    } else {
      transaction.id = nanoid();
      setTransaction([...transactions, transaction]);
    }
  };

  const getTransaction = (transactionId) => {
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
