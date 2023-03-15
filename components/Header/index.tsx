import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFish,
  faListOl,
  faMagnifyingGlass,
  faMap,
  faScroll,
  faStar,
  faTags,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import Timer from '../Timer';
import Theme from '../Theme';

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">LOGO</div>
        <div className="navbar__input">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="navbar__menu">
          <h3 className="navbar__title">Menu</h3>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link className="navbar__link" href={`/shop`}>
                <FontAwesomeIcon icon={faTags} />
                Daily Shop
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" href={`/map`}>
                <FontAwesomeIcon icon={faMap} />
                Current map & map history
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" href={`/challenges`}>
                <FontAwesomeIcon icon={faScroll} />
                Weekly challenges
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" href={`/battlePass`}>
                <FontAwesomeIcon icon={faListOl} />
                BattlePass
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" href={`/achievements`}>
                <FontAwesomeIcon icon={faStar} />
                Achievements list
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" href={`/fish`}>
                <FontAwesomeIcon icon={faFish} />
                Fish List
              </Link>
            </li>
          </ul>
          <div className="navbar__theme">
            <Theme />
          </div>
          {/* <div className="navbar__theme">
            <Timer />
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
