import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import LockerPage from "./Homework/LockerPage";
// import { Hello, HelloClass } from "./intro/Hello";
// import CetakTable from "./intro/CetakTable";
import People from "./intro/People";
import PeopleView from "./intro/PeopleView";
import LatihanPage from "./latihan/LatihanPage";
import GuestBookPage from "./guest-book/GuestBookPage";
import LoginPage from "./Website/LoginPage";
import Dashboard from "./Website/DashboardPage";
import UncontrolledPage from "./Website/UncontrolledPage";
import CounterPage from "./counter-context/CounterPage";
import ShoeRentalPage from "./shoe-rental fn/ShoeRentalPage";
import CounterReducerPage from "./counter-reducer/CounterReducerPage";
function App() {
  // let name = "suhendra";
  // let mobil = {
  //   brand: "toyota",
  //   name: "rush",
  // };
  // let greet = () => {
  //   const word = "Terimakasih";
  //   return word;
  // };

  // function CobaCetak() {
  //   return (
  //     <div>
  //       <p>Coba Cetak</p>;
  //     </div>
  //   );
  // }

  // let mobil2 = { ...mobil };
  return (
    // <Container fluid>
    //   <Row>
    //     <Col>
    //       <Hello
    //         name={name}
    //         job={"Aktor"}
    //         greet={greet}
    //         gender={"Male"}
    //         mobil={{ ...mobil }}
    //       />
    //     </Col>
    //     <Col>
    //       <HelloClass
    //         Hello={Hello}
    //         helloCoba={CobaCetak}
    //         mobil={mobil}
    //         greet={greet}
    //       >
    //         <CobaCetak />
    //       </HelloClass>
    //     </Col>
    //     <Col>
    //       <CetakTable />
    //     </Col>
    //     <Row>
    //       <People />
    //     </Row>
    //   </Row>
    // </Container>
    <>
      <Container fluid>
        <Row>
          <Col>
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
            <CounterReducerPage />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
