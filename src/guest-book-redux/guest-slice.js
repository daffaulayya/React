const { createSlice } = require("@reduxjs/toolkit");

const guestSlice = createSlice({
  name: "guest",
  initialState: {
    guests: [],
  },
  reducers: {
    addGuest: (state, action) => {
      const {
        payload: { person, idxSelected },
      } = action;
      if (idxSelected !== undefined) {
        state.guests[idxSelected] = person;
      } else {
        state.guests.push(person);
      }
    },
  },
});

export const { addGuest } = guestSlice.actions;
export default guestSlice;
