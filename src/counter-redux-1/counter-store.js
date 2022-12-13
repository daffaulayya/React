import { createStore } from "redux";

const initialState = {
  title: "Counter Card Redux",
  cardSlot: [{ count: 0 }],
};

const COUNT_ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  ADDCARD: "addCard",
  DELETECARD: "deleteCard",
};

function countReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case COUNT_ACTIONS.INCREMENT:
      let increment = [...state.cardSlot];
      increment[payload.idx].count += payload.number;
      return { ...state, cardSlot: increment };
    case COUNT_ACTIONS.DECREMENT:
      let decrement = [...state.cardSlot];
      decrement[payload.idx].count -= payload.number;
      return { ...state, cardSlot: decrement };
    case COUNT_ACTIONS.ADDCARD:
      return { ...state, cardSlot: [...state.cardSlot, { count: 0 }] };
    case COUNT_ACTIONS.DELETECARD:
      let deleteCard = [...state.cardSlot];
      deleteCard.splice(payload, 1);
      return { ...state, cardSlot: deleteCard };
    default:
      return { ...state };
  }
}

// syarat untuk menggunakan redux, buat sebuah store.
/**
 * 3 Konsep: Store, Reducer, dan Action
 *
 * Toko Alfamart
 * 1. Store   : Rak barang2 (Sebagai state manager / untuk menyimpan state)
 * 2. Reducer : Penjaga toko
 * 3. Action  : Pembeli
 *
 * Redux terdiri dari 2 komponen utama, yaitu:
 * 1. Provider : Mirip dengan context, hanya saja menggunakan store sebagai props, bukan value
 * 2. connect  : HoC, yg menerima 2 parameter fungsi mapper, dan akan mengembalikan function HoCnya
 *
 * contoh:
 * <Proider store={counterStore} />
 * exportdefault connect(mapStateToProps, mapDispatchToProps) (CounterButton)
 */
const counterStore = createStore(countReducer);

// counterStore.getState();

export { counterStore, COUNT_ACTIONS };
