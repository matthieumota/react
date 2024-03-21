import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',

    initialState: [
        { id: 1, name: 'Faire les courses', done: false },
        { id: 2, name: 'Travailler', done: true },
        { id: 3, name: 'Surveiller Fiorella', done: true },
    ],

    reducers: {
        add: (state, action) => {
            return [ ...state, action.payload ];
        },
        remove: (state, action) => {
            return state.filter(t => t.id !== action.payload);
        },
        toggle: (state, action) => {
            return state.map(t => t.id === action.payload ? { ...t, done: !t.done } : t);
        },
        edit: (state, action) => {
            const { id, name } = action.payload;

            return state.map(t => t.id === id ? { ...t, name } : t);
        },
    },

    selectors: {
        count: (state) => state.length,
        countDone: (state) => state.filter(t => t.done).length,
        all: (state) => state,
    }
});

export const { count, all } = todoSlice.selectors;
export const { add, remove, toggle, edit } = todoSlice.actions;

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    },
});
