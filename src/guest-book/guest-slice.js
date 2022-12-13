import { createSlice } from "@reduxjs/toolkit";

const guestSlice = createSlice({
  name: "guest",
  initialState: {
    guests: [],
  },
  reducers: {
    addGuest: (state, action) => {
      state.guests.push(action.payload);
    },
  },
});

const { addGuest } = guestSlice.actions;

export default guestSlice;
export { addGuest };
