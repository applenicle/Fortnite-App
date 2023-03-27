import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faFish,
  faListOl,
  faMap,
  faScroll,
  faStar,
  faTags,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import Theme from '../Theme';

const Header = () => {
  const [open, setOpen] = React.useState(true);

  const navigation = [
		{
      icon: faTags,
			label: 'Daily Shop',
			href: '/shop',
		},
    {
      icon: faMap,
			label: 'Current map & map history',
			href: '/map',
		},
		{
      icon: faScroll,
			label: 'Challenges',
			href: '/challenges',
		},
    {
      icon: faListOl,
			label: 'Battlepass',
			href: '/battlepass',
		},
    {
      icon: faStar,
			label: 'Achievements list',
			href: '/achievements',
		},
		{
      icon: faFish,
			label: 'Fish List',
			href: '/fish',
		},
	];


  return (
    <>
      <nav className={open == false ? 'navbar close' : 'navbar'}>
        <div className="navbar__open">
          <FontAwesomeIcon onClick={() => setOpen(!open)} icon={faArrowRight} />
        </div>
        <div className="navbar__menu">
          <ul className="navbar__list">
            { navigation.map(({href, icon, label}, i) => (
            <li key={i} className="navbar__item">
              <Link className="navbar__link" href={href}>
                <FontAwesomeIcon icon={icon} />
                <span>{label}</span>
              </Link>
            </li>))}
          </ul>
        </div>
        <div>
          <Theme />
        </div>
        {/* <div className="navbar__language">
          <FontAwesomeIcon icon={faFlag} />
          <Language />
        </div> */}
        <div className="navbar__logo">LOGO</div>
      </nav>
    </>
  );
};

export default Header;
