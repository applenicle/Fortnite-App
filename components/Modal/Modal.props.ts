export interface ModalProps {
  imageSrc: string;
  altImg: string;
  name: string;
  details: string;
  rarity: string;
  activeItem: number;
  index: number;
  onSelectItem: (index: number | null) => void;
  children: React.ReactNode;
}
