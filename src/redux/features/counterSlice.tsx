import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
  numberOfSlashes: 0, // Add a new state for showing slash
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
      if (state.count % 5 === 0) {
        state.numberOfSlashes += 1; // Increment numberOfSlashes after every 5 counts
      }
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
      if (state.count % 5 === 4) {
        state.numberOfSlashes -= 1; // Decrement numberOfSlashes when going below multiples of 5
      }
      //state.value=state.value+action.payload.value
    },
    decrementByValue: (state, action) => {
      const decrementValue = action.payload;
      if (state.count >= decrementValue) {
        state.count += decrementValue;
        state.numberOfSlashes = Math.floor(state.count / 5);
      } else {
        state.count = decrementValue;
        state.numberOfSlashes += 1;
      }
    },
  },
});
export const { increment, decrement, decrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
