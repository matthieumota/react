import { configureStore, createSlice } from '@reduxjs/toolkit';

// La partie concernant les names
const nameSlice = createSlice({
  name: 'name',

  // Les données
  initialState: ['Fiorella', 'Toto', 'Titi'],

  // Les actions sur ces données
  reducers: {
    addName: (state, action) => {
      const newName = action.payload;

      // state.push(newName);
      return [ ...state, newName ];
    },
    deleteName: (state, action) => {
      return state.filter(n => n !== action.payload);
    },
  },
});

export const { addName, deleteName } = nameSlice.actions;

// On va créer le store global
export const store = configureStore({
  reducer: {
    names: nameSlice.reducer,
  },
});
