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
import { useState } from 'react';
import Theme from '../Theme';
import Language from '../Language';
import { useRouter } from 'next/router';

const Header = () => {
  const { locale } = useRouter()
  const [open, setOpen] = useState(true);
  const [activeLink, setActiveLink] = useState(0);
  
  const onSelectItem = (index:number) => {
    setActiveLink(index);
  };

  const navigation = [
		{
      icon: faTags,
			label: 'Daily Shop',
			href: `/shop`,
      locale: {locale},
		},
    {
      icon: faMap,
			label: 'Current map & map history',
			href: `/map`,
      locale: {locale},
		},
		{
      icon: faScroll,
			label: 'Challenges',
			href: `/challenges`,
      locale: {locale},
		},
    {
      icon: faListOl,
			label: 'Battlepass',
			href: `/battlepass`,
      locale: {locale},
		},
    {
      icon: faStar,
			label: 'Achievements list',
			href: `/achievements`,
      locale: {locale},
		},
		{
      icon: faFish,
			label: 'Fish List',
			href: `/fish`,
      locale: {locale},
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
            { navigation && navigation.map(({href, icon, label}, i:number) => (
            <li
              key={i}
              className={activeLink === i ? 'navbar__item--active' : "navbar__item"} 
            >
              <Link 
                className="navbar__link" 
                href={href} 
                locale={locale}
                onClick={() => onSelectItem(i)} 
              >
                <FontAwesomeIcon icon={icon} />
                <span>{label}</span>
              </Link>
            </li>
            ))}
          </ul>
        </div>
        <div>
          <Theme />
        </div>
          <Language/>
        <div className="navbar__logo">
          <Link href='/'>
            <h3>{open == false ? 'FS' : 'FortniteStats'}</h3>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
