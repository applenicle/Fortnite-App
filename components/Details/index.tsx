import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import moment from 'moment';
import styles from './Details.module.scss';
import { DetailsProps } from './Details.props';
import Rarity from '../Rarity';

const Details = ({
  added,
  description,
  grants,
  images,
  introduction,
  lastAppearance,
  name,
  rarity,
  releaseDate,
  set,
  series,
  shopHistory,
  type,
}: DetailsProps) => {
  return (
    <div className={styles.details}>
      <div className={styles.details__img}>
        <img src={images.background} alt="assets" />
      </div>
      <div className={styles.details__description}>
        <Link href="/shop">
          Back
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <h3 className={styles.details__subtitle}>{name}</h3>
        <h2 className={styles.details__subtitle}>
          {type.name}
          <Rarity rarity={rarity?.id}>{rarity.name}</Rarity>
        </h2>
        <p className={styles.details__text}>{description}</p>

        <ul className={styles.details__list}>
          <li className={styles.details__item}>
            {undefined ? `Introduced in ${introduction?.chapter} , ${introduction?.season}` : ''}
          </li>
          <li className={styles.details__item}>{set?.partOf}</li>
          <li className={styles.details__item}>{series?.name}</li>
          <li className={styles.details__item}>
            <span>Release date: </span>
            {moment(releaseDate).format('ll')}
          </li>
          <li className={styles.details__item}>
            <span>Last seen: </span>
            {moment(lastAppearance).format('ll')}
          </li>
          <li className={styles.details__item}>{grants?.[0]?.description}</li>
          <li className={styles.details__item}>
            <span>Added: </span>
            {moment(added?.date).format('ll')}
          </li>
          <li className={styles.details__item}>
            History:
            <select>
              {shopHistory
                ?.map((obj: string, i: number) => (
                  <option key={i}>{moment(obj).format('ll')}</option>
                ))
                .reverse()}
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
