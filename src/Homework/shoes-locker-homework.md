# Shoe Locker Homework

Dates: November 26, 2022
Property: Not started

# Shoes Locker

Buatlah page shoes locker yang terdiri dari komponen dan model berikut ini.

```jsx
locker
├── Locker.js
├── LockerSlot.js
├── LockerPanel.js
└── LockerPage.js
```

1. ******\*\*******Model Locker******\*\******* berupa class yang akan menjadi bentuk data dari **state** `lockers`.

   ```jsx
   export default class Locker {
     constructor() {
       this.shoes = 0;
       this.isLocked = false;
     }
   }
   ```

2. Komponen `LockerPage`, merupakan state manager dari semua komponen di bawahnya, memiliki struktur sebagai berikut.

   ```jsx
   import { Component } from "react";
   import Locker from "./Locker";
   import LockerCard from "./LockerCard";

   export default class LockerPage extends Component {
     constructor(props) {
       super(props);

       this.state = {
         lockers: [new Locker()],
       };

       this.removeLocker = this.removeLocker.bind(this);
       this.toggleLock = this.toggleLock.bind(this);
       this.putShoes = this.putShoes.bind(this);
       this.takeShoes = this.takeShoes.bind(this);
     }

     toggleLock(index) {}

     putShoes(index) {}

     takeShoes(index) {}

     addLocker() {}

     removeLocker(index) {}

     render() {}
   }
   ```

3. Komponen `LockerSlot`, merupakan penggambaran dari satu unit **locker** yang dapat digunakan untuk menyimpan **sepatu**, dengan syarat berikut.
   1. User locker dapat **mengunci** dan **membuka** kuncinya.
   2. User locker dapat **menitipkan** **maksimal 3 pasang sepatu**.
   3. User locker dapat **mengambil** **sepatu** **sampai 0 pasang sepatu tersisa**.
   4. Locker **tidak dapat dihapus** jika ada sepatu di dalamnya.
4. Komponen `LockerPanel`, merupakan kumpulan **tombol** yang berfungsi menjalankan fungsi sebagai berikut.
   1. Fungsi `putShoes` yang akan menambahkan 1 shoes ke dalam `Locker`.
   2. Fungsi `takeShoes` yang akan mengurangi 1 shoes dari dalam `Locker`.
   3. Fungsi `toggleLock` yang akan mengubah-ubah status `Locker` dari terkunci atau tidak terkunci.
5. Buatlah **layout** UI yang rapih dan responsive.
