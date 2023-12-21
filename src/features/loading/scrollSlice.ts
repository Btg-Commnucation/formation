import { createSlice } from "@reduxjs/toolkit";

export interface ScrollState {
  data: { state: boolean; y: number };
}

const initialState: ScrollState = {
  data: { state: false, y: 0 },
};

export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setScroll(state: ScrollState, action: { payload: boolean }) {
      state.data.state = action.payload;
    },
    setScrollY(state: ScrollState, action: { payload: number }) {
      state.data.y = action.payload;
    },
  },
});

export const { setScroll, setScrollY } = scrollSlice.actions;
export default scrollSlice.reducer;
