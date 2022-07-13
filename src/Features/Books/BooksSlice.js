import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        { id: 1, title: "stack learn", author: 'hm nayem' },
        { id: 2, title: "learn with sumit", author: 'sumit saha' },
        { id: 3, title: "ph-hero", author: 'jhankar mahbub' }
    ],
}
const booksSlice = createSlice({
    name: "Books",
    initialState: initialBooks,
    reducers: {
        showBooks: state => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload
            const existingBook = state.books.filter(book => book.id === id)
            if (existingBook) {
                existingBook[0].title = title
                existingBook[0].author = author
            }

        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload)
        }
    }
})
export const { showBooks, addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;