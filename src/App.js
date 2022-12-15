import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Async from "./components/Async";

/**
 * Testing dibagi menjadi 2:
 * 1. Manual Testing: menuliskan code dan langsung preview test di browser
 * 2. Automated Testing: menuliskan code untuk test code yang sudah dibuat
 *  a. Unit test: membuat test untuk setiap unit yang ada didalam aplikasi
 *  b. Integration test: membuat test untuk kombinasi dari beberapa komponen yang saling berhubungan
 *  c. End to End test: test untuk workflow dari aplikasi yang dibuat
 *
 *
 * Tool yang digunakan untuk testing:
 *  1. Jest: untuk menjalankan test dan asserting hasilnya.
 *  2. react testing library: untuk simulasi aplikasi yang dibuat
 */

function App() {
  return (
    // <Greeting />;
    <Async />
  );
}

export default App;
