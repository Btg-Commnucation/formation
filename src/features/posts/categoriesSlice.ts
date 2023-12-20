import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Tcategory = {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: string;
};

export interface CategoriesState {
  data: Tcategory[];
}

const initialState: CategoriesState = {
  data: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (
      state: { data: Tcategory[] },
      action: PayloadAction<Tcategory[]>,
    ) => {
      state.data = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
