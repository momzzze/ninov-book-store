import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    mode: 'light' | 'dark';
    user: null | { username: string; email: string, role: string, userId: string };
    token: null | string;
    books: [];
    book: null | { name: string; author: string; _id: string };

}


const initialState: AuthState = {
    mode: 'light',
    user: null,
    token: null,
    books: [],
    book: null,
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
        // setBook: (state, action)=>{
        //    const updatedBooks=state.books.map((book)=>{
        //     if(book._id === action.payload.book._id){
        //         return action.payload.book;
        //     }
        //    });
        //    state.books=updatedBooks;
        // },
    }
})

export const { setMode, setLogin, setLogout, setBooks } = authSlice.actions;
export default authSlice.reducer;