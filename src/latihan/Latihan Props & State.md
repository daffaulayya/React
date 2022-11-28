# Latihan Props State

Buatlah Component yang mana akan menambahkan sejumlah angka dan mengurangkan sejumlah angka dari suatu bilangan. dengan syarat:

1. Component ini harus tersusun seperti berikut:

   ```jsx
   latihan
   ├── LatihanPage.js
   ├── LatihanCard.js
   ├── LatihanButtonPlus.js
   └── LatihanButtonMinus.js

   ```

2. File `LatihanButtonPlus.js` berfungsi untuk menambahkan sejumlah angka berdasarkan parameter increment ke suatu bilangan. jika tidak ada increment maka bilangan akan ditambahkan 1

   ```jsx
   <LatihanButtonPlus plus={this.plus} increment={this.props.increment} />
   ```

3. File `LatihanButtonMinus.js` berfungsi untuk mengurangkan sejumlah angka berdasarkan parameter decrement ke suatu bilangan. jika tidak ada decrement maka bilangan akan dikurangi 1

   ```jsx
   <LatihanButtonMinus minus={this.minus} decrement={this.props.decrement} />
   ```

4. File `LatihanCard.js` berfungsi untuk menampilkan state angka saat ini (setelah ditambah / dikurang)

   ```jsx
   <LatihanCard count={this.state.count} />
   ```

5. File `LatihanPage.js` berfungsi untuk menyimpan state `angka`, function `plus`, dan function `minus`. `LatihanPage` juga menampilkan component `LatihanCard`, `LatihanButtonPlus`, `LatihanButtonMinus`

   ```jsx
   <LatihanPage increment={2} decrement={5} />
   <LatihanPage increment={3} decrement={2} />
   <LatihanPage increment={4} decrement={7} />
   ```

import React, { useState } from "react";
import Table from "react-bootstrap/Table";

export default function LatihanButtonPlus() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 2);
  };
  const handleDecrement = () => {
    setCount(count - 5);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <Table
          striped
          bordered
          hover
          variant="light"
          style={{ width: "200px", height: "100px" }}
        >
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th scope="col">Counter</th>
            </tr>
          </thead>
          <tbody variant="light" style={{ textAlign: "center" }}>
            <tr>
              <th>{count}</th>
            </tr>
          </tbody>
        </Table>
        <div className="d-flex">
          <button
            style={{
              borderRadius: "10px",
              fontWeight: "bold",
              width: "100%",
              backgroundColor: "#000",
            }}
            onClick={handleIncrement}
            className="btn btn-success me-3"
          >
            +2
          </button>
          <button
            style={{
              borderRadius: "10px",
              fontWeight: "bold",
              width: "100%",
              backgroundColor: "#000",
            }}
            onClick={handleDecrement}
            className="btn btn-success ms-3"
          >
            -5
          </button>
        </div>
      </div>
    </div>
  );
}
