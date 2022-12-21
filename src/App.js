import { Container } from "react-bootstrap";
import "./App.css";

import { Provider } from "react-redux";

import MainStore from "./store";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <People /> */}
      {/* <PeopleView /> */}
      {/* <LatihanPage increment={7} decrement={3} /> */}
      {/* <LockerPage /> */}
      {/* <GuestBookPage /> */}
      {/* <LoginPage /> */}
      {/* <Dashboard /> */}
      {/* <UncontrolledPage /> */}
      {/* <CounterPage /> */}
      {/* <ShoeRentalPage /> */}
      {/* <ShoeRentalPage /> */}
      {/* <CounterReducerPage /> */}
      {/* <StateSamplePage /> */}
      {/* <Provider store={counterStore}>
              <CounterReduxPage />
            </Provider> */}
      {/* <CounterSlicePage /> */}
      {/* <GuestBookSlicePage /> */}
      <Header />
      <Provider store={MainStore}>
        <Container fluid>
          <Outlet />
        </Container>
      </Provider>
    </>
  );
}

export default App;
