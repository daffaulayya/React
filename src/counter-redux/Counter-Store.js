import { createStore } from "redux";
import { connect } from "react-redux";

const initialState = {
  cardSlot: [{ count: 0 }],
  title: "Counter Card Redux",
};

const COUNT_ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREMENTBYAMOUNT: "incrementByAmount",
  ADDCARD: "addCard",
  DELETECARD: "deleteCard",
};

function counterReducer(state = initialState, actions) {
  const { type, payload } = actions;

  switch (type) {
    case COUNT_ACTIONS.INCREMENT:
      let increment = [...state.cardSlot];
      increment[payload.idx].count += payload.number;
      return { ...state, cardSlot: increment };
    case COUNT_ACTIONS.DECREMENT:
      let decrement = [...state.cardSlot];
      decrement[payload.idx].count -= payload.number;
      return { ...state, cardSlot: decrement };
    case COUNT_ACTIONS.INCREMENTBYAMOUNT:
      return { ...state, value: payload };
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

//syarat untuk menggunakan redux, buat sebuah store.
/**
 * 3 konsep: store (menyimpan state), reducer (FUNCTION) dan action
 * action ?
 * type: perintah
 * payload: data perintah
 *
 * Umpama:
 * 1. Store: rak Barang2 (sebagain state manager / untuk menyimpan state)
 * 2. Reducer: penjaga toko
 * 3. Action: pembeli
 *
 * Redux terdiri dari 2 komponen utama, yaitu:
 * 1. Provider: mirip dengan context, hanya saja menggunakan store sebagai props-nya
 * 2. Connect: HOC, yang menerima 2 parameter, dan akan mengembalikan fungsi HOC-nya
 *
 * contoh:
 * <Provider store = {counterStore} />
 * export default connect (mapStateToProps, mapDispatchToProps ) (CounterButton)
 */
const counterStore = createStore(counterReducer);

export { counterStore, COUNT_ACTIONS };
