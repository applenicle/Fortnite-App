import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';
import cn from 'classnames';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({
  imageSrc,
  altImg,
  name,
  details,
  rarity,
  activeItem,
  index,
  onSelectItem,
  children,
}: ModalProps): JSX.Element => {
  return (
    <div className={activeItem === index ? `${styles.modal} ${styles.modal__open}` : styles.modal}>
      <div className={styles.inner}>
        <div className={styles.close}>
          <FontAwesomeIcon
            onClick={(e) => {
              e.stopPropagation();
              onSelectItem(null);
            }}
            icon={faXmark}
          />
        </div>
        <div>
          <img src={imageSrc} alt={altImg} />
          <div className={styles.content}>
            <h3>{name}</h3>
            <p>{details}</p>
            <ul>
              <li
                className={cn(styles.rarity, {
                  [styles.rarity__common]: rarity?.toLowerCase().includes('common')
                    ? styles.rarity__common
                    : '',
                  [styles.rarity__uncommon]: rarity?.toLowerCase().includes('uncommon')
                    ? styles.rarity__uncommon
                    : '',
                  [styles.rarity__rare]: rarity?.toLowerCase().includes('rare')
                    ? styles.rarity__rare
                    : '',
                  [styles.rarity__epic]: rarity?.toLowerCase().includes('epic')
                    ? styles.rarity__epic
                    : '',
                  [styles.rarity__legendary]: rarity?.toLowerCase().includes('legendary')
                    ? styles.rarity__legendary
                    : '',
                  [styles.rarity__mythic]: rarity?.toLowerCase().includes('mythic')
                    ? styles.rarity__mythic
                    : '',
                  [styles.rarity__exotic]: rarity?.toLowerCase().includes('exotic')
                    ? styles.rarity__exotic
                    : '',
                })}>
                {rarity}
              </li>
              {children}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
