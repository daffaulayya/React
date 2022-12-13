import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice, merupakan sebuah objek yg terdiri dari property berikut:
 * 1. nama slice-nya (name)
 * 2. initial state-nya (initialState)
 * 3. reducer-nya (reducers)
 * 4. extra reducers (extraReducers) -> optional
 *
 * Output createSlice, menghasilkan object slice, yang memiliki property
 * 1. name (property)
 * 2. actions (property)
 * 3. reducers (property)
 * 4. caseReducers (property)
 * 5. getInitialState(method)
 */
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    title: "Counter Card Redux",
    card: [0],
    count: 0,
  },
  reducers: {
    addCard: (state, action) => {
      state.card.push(state.count);
    },
    delCard: (state, action) => {
      //tidak perlu di spread state-nya seperti redux lama
      state.card = state.card.filter((card, index) => index !== action.payload);
    },
    increment: (state, action) => {
      const {
        payload: { incrementValue = 1, index },
      } = action;
      state.card[index] += incrementValue;
    },
    decrement: (state, action) => {
      const {
        payload: { decrementValue = 1, index },
      } = action;
      state.card[index] -= decrementValue;
    },
  },
});

const { addCard, delCard, increment, decrement } = counterSlice.actions;

export default counterSlice;
export { addCard, decrement, delCard, increment };
