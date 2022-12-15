import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterSlicePage from "./counter-redux-toolkit/CounterSlicePage";
import GuestBook from "./GuestBookExample/GuestBook";
import LockerPage from "./Homework/LockerPage";
import Header from "./layout/Header";
import RouteGuard from "./route-guard/RouteGuard";
import ShoeRentalFormFn from "./shoe-rental-new/ShoeRentalFormFn";
import ShoeRentalList from "./shoe-rental-new/ShoeRentalList";
import ShoeRentalPageFn from "./shoe-rental-new/ShoeRentalPageFn";
import MainStore from "./store";

export default function AppRouted() {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid>
        <Provider store={MainStore}>
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <h1>NOT FOUND</h1>
                </>
              }
            />
            <Route element={<RouteGuard />}>
              <Route path="" element={<GuestBook />} />
              <Route path="guestbook" element={<GuestBook />} />
              <Route path="shoe-rental" element={<ShoeRentalPageFn />}>
                <Route path="" element={<ShoeRentalList />} />
                <Route path="form" element={<ShoeRentalFormFn />} />
                <Route path="form/:id" element={<ShoeRentalFormFn />} />
              </Route>
            </Route>

            <Route path="counter" element={<CounterSlicePage />} />
            <Route path="locker" element={<LockerPage />} />

            <Route path="login" element={<>Login</>} />
          </Routes>
        </Provider>
      </Container>
    </BrowserRouter>
  );
}
