import BooksSlice from "../Features/Books/BooksSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        booksReducer: BooksSlice
    }
})
export default store;