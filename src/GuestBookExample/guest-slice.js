import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import * as GuestAPI from "./guest-api";

/**
 * async thunk
 */

export const fetchGuests = createAsyncThunk("guest/fetchGuests", async () => {
  const guests = await GuestAPI.getAllGuests();

  console.log("fetching guests done");
  return guests;
});

export const saveGuest = createAsyncThunk("guest/saveGuest", async (guest) => {
  guest.id = nanoid();

  const guestData = await GuestAPI.creataeGuest(guest);
  console.log('create guest "', guest.firstName, '"data');
  return guestData;
});

export const updateGuest = createAsyncThunk(
  "guest/updateGuest",
  async (guest) => {
    const guestData = await GuestAPI.updateGuest(guest);
    console.log('update guest "', guest.firstName, '"data');
    return guestData;
  }
);

export const deleteGuest = createAsyncThunk("guest/deleteGuest", async (id) => {
  const guestData = await GuestAPI.deleteGuest(id);

  return guestData;
});

const guestSlice = createSlice({
  name: "guest",
  initialState: {
    guests: [],
    selectedGuest: undefined,
  },

  reducers: {
    save: (state, action) => {
      state.guests.push(action.payload);

      //   console.log("save", action.payload);
    },

    getGuests: (state, action) => {
      state.guests = action.payload;
    },

    update: (state, action) => {
      state.guests = state.guests.map((guest) => {
        if (guest.id === action.payload.id) {
          guest = action.payload;
        }

        return guest;
      }); //cb akan dikirmkam 2 parameter
      console.log("update", action.payload);
    },
    selectGuest: (state, action) => {
      state.selectedGuest = state.guests.find(
        (guest) => guest.id === action.payload
      );

      console.log("select", action.payload);
    },
    unselectGuest: (state) => {
      state.selectedGuest = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGuests.fulfilled, (state, action) => {
        state.guests = action.payload;
      })
      .addCase(fetchGuests.rejected, (state) => {
        state.guests = [];
      });
  },
});

const { save, update, selectGuest, unselectGuest, getGuests } =
  guestSlice.actions;

export default guestSlice;
export { save, update, selectGuest, unselectGuest, getGuests };
