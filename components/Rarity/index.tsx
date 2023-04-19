import cn from 'classnames';
import styles from './Rarity.module.scss';
import { RarityProps } from './Rarity.props';

const Rarity = ({ rarity, children }: RarityProps) => {
  return (
    <span
      className={cn(styles.rarity, {
        [styles.rarity__common]: rarity?.toLowerCase().includes('common')
          ? styles.rarity__common
          : '',
        [styles.rarity__uncommon]: rarity?.toLowerCase().includes('uncommon')
          ? styles.rarity__uncommon
          : '',
        [styles.rarity__rare]: rarity?.toLowerCase().includes('rare') ? styles.rarity__rare : '',
        [styles.rarity__epic]: rarity?.toLowerCase().includes('epic') ? styles.rarity__epic : '',
        [styles.rarity__legendary]: rarity?.toLowerCase().includes('legendary')
          ? styles.rarity__legendary
          : '',
        [styles.rarity__mythic]: rarity?.toLowerCase().includes('mythic')
          ? styles.rarity__mythic
          : '',
        [styles.rarity__exotic]: rarity?.toLowerCase().includes('exotic')
          ? styles.rarity__exotic
          : '',
        [styles.rarity__transcendent]: rarity?.toLowerCase().includes('transcendent')
          ? styles.rarity__transcendent
          : '',
      })}>
      {children}
    </span>
  );
};

export default Rarity;
