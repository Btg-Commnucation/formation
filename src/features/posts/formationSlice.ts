import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Tarticle = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  media: {
    medium_large: string;
  };
  category_names: string[];
  acf: {
    duree: string;
    formateur: string;
    zone_de_prix: string;
    modalites: string;
    partie_bleu: string;
    partie_grise: string;
  };
};

export interface FormationState {
  data: Tarticle[];
}

const initialState: FormationState = {
  data: [],
};

export const formationSlice = createSlice({
  name: "formation",
  initialState,
  reducers: {
    setFormation: (
      state: { data: Tarticle[] },
      action: PayloadAction<Tarticle[]>,
    ) => {
      state.data = action.payload;
    },
  },
});

export const { setFormation } = formationSlice.actions;
export default formationSlice.reducer;
