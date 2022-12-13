import { Provider } from "react-redux";
import MainStore from "../store";
import CounterSliceCard from "./CounterSliceCard";
import CounterSliceHeader from "./CounterSliceHeader";

export default function CounterSlicePage(props) {
  return (
    <>
      <Provider store={MainStore}>
        <CounterSliceHeader />
        <CounterSliceCard />
      </Provider>
      ;
    </>
  );
}
