import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rarity from '../Rarity';

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
    <div
      className={activeItem === index ? `${styles.modal} ${styles.modal__open}` : styles.modal}>
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
              <li>
                <Rarity rarity={rarity}>{rarity}</Rarity>
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
