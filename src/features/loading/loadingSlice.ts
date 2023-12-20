import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoadingState {
  data: boolean;
}

const initialState: { data: boolean } = {
  data: true,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state: { data: boolean }, action: PayloadAction<boolean>) => {
      state.data = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
