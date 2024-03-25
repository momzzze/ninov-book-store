import { createSlice } from '@reduxjs/toolkit';
import { BookWithId } from '../types/types';

export interface AuthState {
    mode: 'light' | 'dark';
    user: null | { username: string; email: string, role: string, userId: string };
    token: null | string;
    books: BookWithId[];
    book: null | { name: string; author: string; _id: string };
    genres: [];
}


const initialState: AuthState = {
    mode: 'light',
    user: null,
    token: null,
    books: [],
    book: null,
    genres: [],
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setBooks: (state, action) => {
            state.books = action.payload.books;
        },
        setGenres: (state, action) => {
            state.genres = action.payload.genres;
        },
        setBook: (state, action) => {
            state.book = action.payload.book;
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter((book: BookWithId) => book._id !== action.payload.bookId);
        },
        updateBook: (state, action) => {
            state.books = state.books.map((book: BookWithId) => {
                if (book._id === action.payload.book._id) {
                    return { ...book, ...action.payload.book };
                }
                return book;
            });
        },
    }
})

export const { setMode, setLogin, setLogout, setBooks, setGenres,updateBook } = authSlice.actions;
export default authSlice.reducer;