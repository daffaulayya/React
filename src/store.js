import { configureStore } from "@reduxjs/toolkit";
import guestSlice from "./GuestBookExample/guest-slice";
import counterSlice from "./counter-redux-toolkit/counter-slice";
// import guestSlice from "./guest-redux/guest-slice";

const MainStore = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    // [guestSlice.name]: guestSlice.reducer,
    [guestSlice.name]: guestSlice.reducer,
  },
});

export default MainStore;
