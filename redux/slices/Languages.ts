import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitial {
  isOpen: boolean;
  highlighterIndex: number;
}

export const initialState: IInitial = {
  isOpen: false,
  highlighterIndex: 0,
};

export const LanguagesSlice = createSlice({
  name: 'Languages',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setHighlighterIndex: (state, action: PayloadAction<number>) => {
      state.highlighterIndex = action.payload;
    },
  },
});

export const { setIsOpen, setHighlighterIndex } = LanguagesSlice.actions;

export default LanguagesSlice.reducer;
