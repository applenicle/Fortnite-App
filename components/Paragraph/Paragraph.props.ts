import { ButtonHTMLAttributes, DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: React.ReactNode;
  size?: 'sm' | 'lg' | 'md';
}
