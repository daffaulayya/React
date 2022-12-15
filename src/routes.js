import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GuestBook from "./GuestBookExample/GuestBook";
import CounterSlicePage from "./counter-redux-toolkit/CounterSlicePage";
import LockerPage from "./Homework/LockerPage";
import ShoeRentalPageFn from "./shoe-rental-new/ShoeRentalPageFn";
import ShoeRentalList from "./shoe-rental-new/ShoeRentalList";
import ShoeRentalFormFn from "./shoe-rental-new/ShoeRentalFormFn";

//output function akan dikirimkan ke router-provider, mirip dengan store
const routes = createBrowserRouter([
  {
    path: "/", //url path pada address bar browser.
    element: <App />, //elemen yang akan ditampilkan
    children: [
      {
        path: "",
        element: <GuestBook />,
      },
      {
        path: "guestbook",
        element: <GuestBook />,
        //   children: [
        //     {
        //       path: "",
        //       element: <GuestBookTable />,
        //     },
        //     {
        //       path: "",
        //       element: <GuestBookForm />,
        //     },
        //   ],
      },
      {
        path: "shoe-rental",
        element: <ShoeRentalPageFn />,
        children: [
          {
            path: "",
            element: <ShoeRentalList />,
          },
          {
            path: "form",
            element: <ShoeRentalFormFn />,
          },
          {
            path: "form/:id",
            element: <ShoeRentalFormFn />,
          },
        ],
      },
      {
        path: "counter",
        element: <CounterSlicePage />,
      },
      {
        path: "locker",
        element: <LockerPage />,
      },
    ],
  },
]);
//func menerima object definisi dari routing

export default routes;
