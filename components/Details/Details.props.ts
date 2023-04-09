import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type Introduction = {
  chapter?: string;
  season?: string;
};

type Image = {
  background: string;
  featured: string;
  full_background: string;
  icon: string;
  icon_background: string;
};

type TypeObj = {
  id: string;
  name: string;
};
interface ISet {
  partOf: string;
  extended: TypeObj;
}
interface IGrants {
  description: string;
  id: string;
  images: Image;
  rarity: TypeObj;
  series: string | null;
  type: TypeObj;
}
type Added = {
  date: string;
  version: string;
};

export interface DetailsProps {
  added?: Added;
  description: string;
  grants?: IGrants[];
  images: Image;
  introduction: Introduction | null;
  lastAppearance?: string;
  name: string;
  rarity: TypeObj;
  releaseDate: string;
  set: ISet | null;
  series?: TypeObj;
  shopHistory: string[];
  type: TypeObj;
  rareStyle: boolean;
}
