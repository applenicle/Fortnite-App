import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

const Details = ({
  introduction,
  series,
  type,
  description,
  rarity,
  name,
  images,
  shopHistory,
  lastAppearance,
  added,
  grants,
  set,
}: any) => {
  return (
    <div className="details">
      <div className="details__img">
        <img src={images.background} alt="assets" />
      </div>
      <div className="details__description">
        <Link href="/shop">
          Back
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <h3 className="details__title">{name}</h3>
        <p className="details__text">{description}</p>

        <ul className="details__list">
          <li className="details__item">
            <span>rare: </span>
            {rarity.name}
          </li>

          <li className="details__item">
            <span> Introduced in: </span>
            {introduction?.chapter}, {introduction?.season}
          </li>

          <li className="details__item">{series?.name}</li>
          <li className="details__item"></li>
          <li className="details__item">
            {series?.name}
            {type?.name}
          </li>
          <li className="details__item">
            <span>Last seen: </span>
            {moment(added.date[0], 'DD').fromNow()}
          </li>
          <li className="details__item">описание тест{grants[0]?.description}</li>
          <li className="details__item">
            <span>Added: </span>
            {added.date}
          </li>
          {set?.partOf}
          {/* <li className="details__item">
            <span>Added: </span>
            {shopHistory}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Details;
