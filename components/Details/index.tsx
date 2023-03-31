import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import moment from 'moment';

type Introduction = {
  chapter?: string
  season?: string
}

type Image = {
  background: string
  featured: string
  full_background: string
  icon: string
  icon_background: string
}

type TypeObj = {
  id: string
  name: string
}
interface ISet {
  partOf: string
  extended: TypeObj
}
interface IGrants {
  description: string
  id:string
  images: Image
  rarity: TypeObj
  series: string | null
  type: TypeObj
}
type Added = {
  date: string
  version: string
}

type Details = {
  added ?: Added
  description : string
  grants ?: IGrants[]
  images : Image
  introduction : Introduction | null
  lastAppearance ?: string
  name : string
  rarity : TypeObj
  releaseDate : string
  set : ISet | null
  series ?: TypeObj
  shopHistory : string[]
  type : TypeObj 
}

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
}: Details) => {
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
        <h2 className="details__subtitle">
          {type.name}
          <span className={
              `${rarity?.name.toLowerCase().includes('uncommon') ? 'rarity-uncommon' : 'rarity'}
                ${rarity?.name.toLowerCase().includes('rare') ? 'rarity-rare' : 'rarity'}
                ${rarity?.name.toLowerCase().includes('epic') ? 'rarity-epic' : 'rarity'}
                ${rarity?.name.toLowerCase().includes('legendary') ? 'rarity-legendary' : 'rarity'}`
              }>{rarity.name}
          </span>
        </h2>
        <p className="details__text">{description}</p>

        <ul className="details__list">
          <li className="details__item">
            {undefined ? `Introduced in ${introduction?.chapter} , ${introduction?.season}` : ''}
          </li>
          <li className="details__item">{set?.partOf}</li>
          <li className="details__item">{series?.name}</li>
          <li className="details__item">
            <span>Release date: </span>
            {moment(releaseDate).format('ll')}
          </li>
          <li className="details__item">
            <span>Last seen: </span>
            {moment(lastAppearance).format('ll')}
          </li>
          <li className="details__item">
          {grants?.[0]?.description}
          </li>
          <li className="details__item">
            <span>Added: </span>
            {moment(added?.date).format('ll')}
          </li>
          <li className="details__item">
            History:
            <select>
              {shopHistory?.map((obj:string, i:number) => 
                <option key={i}>
                  {moment(obj).format('ll')}
                </option>
              ).reverse()}
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
