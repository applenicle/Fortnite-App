import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import moment from 'moment';
import styles from './Details.module.scss';
import { DetailsProps } from './Details.props';
import cn from 'classnames';

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
          <span
            className={cn(styles.rarity, {
              [styles.rarity__uncommon]: rarity?.id.toLowerCase().includes('uncommon')
                ? styles.rarity__uncommon
                : '',
              [styles.rarity__rare]: rarity?.id.toLowerCase().includes('rare')
                ? styles.rarity__rare
                : '',
              [styles.rarity__epic]: rarity?.id.toLowerCase().includes('epic')
                ? styles.rarity__epic
                : '',
              [styles.rarity__legendary]: rarity?.id.toLowerCase().includes('legendary')
                ? styles.rarity__legendary
                : '',
            })}>
            {rarity.name}
          </span>
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
