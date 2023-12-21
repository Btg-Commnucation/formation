import { configureStore } from "@reduxjs/toolkit";
import formationReducer from "@/features/posts/formationSlice";
import loadingReducer from "@/features/loading/loadingSlice";
import categoriesReducer from "@/features/posts/categoriesSlice";
import scrollReducer from "@/features/loading/scrollSlice";

export const store = configureStore({
  reducer: {
    formation: formationReducer,
    loading: loadingReducer,
    categories: categoriesReducer,
    scroll: scrollReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
