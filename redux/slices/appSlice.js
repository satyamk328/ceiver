import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setLoading, setError } = appSlice.actions;
export default appSlice.reducer;
