import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface menuProps {
  firstIndex: number;
  isOpen: boolean;
}

export const initialState: menuProps = {
  firstIndex: 0,
  isOpen: false,
};

export const MenuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setFistIndex: (state, action: PayloadAction<number>) => {
      state.firstIndex = action.payload;
    },
  },
});

export const { setIsOpen, setFistIndex } = MenuSlice.actions;

export default MenuSlice.reducer;
