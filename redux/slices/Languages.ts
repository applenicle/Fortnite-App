import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SelectOptions = {
  value: string
  label:string
}

interface IInitial {
  isOpen: boolean,
  highlighterIndex: number,
  options: SelectOptions[],
}

export const initialState: IInitial = {
  isOpen: false,
  highlighterIndex: 0,
  options: [
    { value: 'en', label: 'English' },
    { value: 'ar', label: 'العربية' },
    { value: 'de', label: 'Deutsch' },
    { value: 'es', label: 'Español (Spain)' },
    { value: 'es-419', label: 'Español (LA)' },
    { value: 'fr', label: 'French' },
    { value: 'it', label: 'Italian' },
    { value: 'ja', label: '日本語' },
    { value: 'ko', label: '한국어' },
    { value: 'pl', label: 'Polski' },
    { value: 'pt-BR', label: 'Português (Brasil)' },
    { value: 'ru', label: 'Русский' },
    { value: 'tr', label: 'Türkçe' },
    { value: 'zh-CN', label: '中文(简体)' },
    { value: 'zh-Hant', label: '中文(繁體)' },
  ],
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
