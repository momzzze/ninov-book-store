import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    mode: 'light' | 'dark';
    user: null | { username: string; email: string, role: string, userId: string };
    token: null | string;
    books: [];
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
        
    }
})

export const { setMode, setLogin, setLogout, setBooks,setGenres } = authSlice.actions;
export default authSlice.reducer;