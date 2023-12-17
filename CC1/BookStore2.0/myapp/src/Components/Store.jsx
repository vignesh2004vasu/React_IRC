import { configureStore, createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    selectedBook: null,
    isBookSelected: false,
  },
  reducers: {
    selectBook: (state, action) => {
      state.selectedBook = action.payload;
      state.isBookSelected = true;
    },
    deselectBook: (state) => {
      state.selectedBook = null;
      state.isBookSelected = false;
    },
  },
});

export const { selectBook, deselectBook } = bookSlice.actions;

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
    
  },
});
