import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import moment from 'moment';
import styles from './Details.module.scss';
import Rarity from '../Rarity';
import { item } from '@/redux/types/Details';
import { options } from '../Language/languageList';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

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
}: item) => {
  const { locale } = useRouter();
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
            {options.map((option, i: number) => (
              <span key={i}>
                {locale == option.value
                  ? format(new Date(releaseDate), 'dd MMMM yyyy', { locale: option.dateFns })
                  : ''}
              </span>
            ))}
          </li>
          <li className={styles.details__item}>
            <span>Last seen: </span>
            {options.map((option, i: number) => (
              <span key={i}>
                {locale == option.value
                  ? format(new Date(lastAppearance), 'dd MMMM yyyy', { locale: option.dateFns })
                  : ''}
              </span>
            ))}
          </li>
          <li className={styles.details__item}>{grants?.[0]?.description}</li>
          <li className={styles.details__item}>
            <span>Added: </span>
            {options.map((option, i: number) => (
              <span key={i}>
                {locale == option.value
                  ? format(new Date(added?.date), 'dd MMMM yyyy', { locale: option.dateFns })
                  : ''}
              </span>
            ))}
          </li>
          <li className={styles.details__item}>
            History:
            <select>
              {shopHistory
                ?.map((obj: string, i: number) => (
                  <option key={i}>
                    {options.map((option, i: number) => (
                      <span key={i}>
                        {locale == option.value
                          ? format(new Date(obj), 'dd MMMM yyyy', { locale: option.dateFns })
                          : ''}
                      </span>
                    ))}
                  </option>
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
