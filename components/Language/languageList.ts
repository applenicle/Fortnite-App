import { ar, de, enUS, es, fr, it, ja, ko, pl, ptBR, ru, tr, zhCN, zhHK } from 'date-fns/locale';

export type SelectOptions = {
  value: string;
  label: string;
  dateFns?: Locale;
};

export const options = [
  { value: 'en', label: 'English', dateFns: enUS },
  { value: 'ar', label: 'العربية', dateFns: ar },
  { value: 'de', label: 'Deutsch', dateFns: de },
  { value: 'es', label: 'Español (Spain)', dateFns: es },
  { value: 'es-419', label: 'Español (LA)', dateFns: es },
  { value: 'fr', label: 'French', dateFns: fr },
  { value: 'it', label: 'Italian', dateFns: it },
  { value: 'ja', label: '日本語', dateFns: ja },
  { value: 'ko', label: '한국어', dateFns: ko },
  { value: 'pl', label: 'Polski', dateFns: pl },
  { value: 'pt-BR', label: 'Português (Brasil)', dateFns: ptBR },
  { value: 'ru', label: 'Русский', dateFns: ru },
  { value: 'tr', label: 'Türkçe', dateFns: tr },
  { value: 'zh-CN', label: '中文(简体)', dateFns: zhCN },
  { value: 'zh-Hant', label: '中文(繁體)', dateFns: zhHK },
] as SelectOptions[];
