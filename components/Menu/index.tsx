import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFish, faMap, faScroll, faTags } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import { useContext, KeyboardEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Menu = (): JSX.Element => {
  const router = useRouter();
  const { locale, pathname } = useRouter();

  console.log(router);
  const navigation = [
    {
      icon: faTags,
      label: 'Cosmetics',
      second: [
        {
          label: 'Daily Shop',
          route: '/shop',
        },
        {
          label: 'Crew Skins',
          route: '/crew',
        },
        {
          label: 'Battlepass Skins',
          route: '/battlepass',
        },
        {
          label: 'List items',
          route: '/items',
        },
        {
          label: 'List of sets',
          route: '/items',
        },
      ],
    },
    {
      icon: faScroll,
      label: 'Events',
      second: [
        {
          label: 'Twitch drops',
          route: '/twitch',
        },
        {
          label: 'News',
          route: '/news',
        },
        {
          label: 'Achievements',
          route: '/achievements',
        },
        {
          label: 'Map history',
          route: '/map',
        },
      ],
    },
    {
      icon: faMap,
      label: 'Map history',
      second: [
        {
          label: 'Map',
          route: '/map',
        },
      ],
    },
    {
      icon: faFish,
      label: 'List item',
      second: [
        {
          label: 'Fish',
          route: '/fish',
        },
        {
          label: 'Wepons',
          route: '/weapon',
        },
        {
          label: 'Rarities',
          route: '/rarity',
        },
        {
          label: 'Loot/weapons list',
          route: '/loot',
        },
        {
          label: 'Cars',
          route: '/cars',
        },
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const Item = (index: number) => {
    setIsOpen((prev) => !prev);
    setIndex(index);
  };

  return (
    <>
      <ul className={styles.menu}>
        {navigation.map((menu, i) => (
          <li key={i}>
            <div
              onClick={() => Item(i)}
              className={cn(styles.link, {
                [styles.linkActive]: i == index,
              })}>
              <FontAwesomeIcon icon={menu.icon} />
              {menu.label}
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <ul
              className={cn(styles.secondList, {
                [styles.secondListActive]: i == index && isOpen,
              })}>
              {menu.second.map((secondMenu, i) => (
                <li key={i}>
                  <Link
                    onClick={() => setIndex(i)}
                    className={cn(styles.linkSecond, {
                      [styles.LinkSecondActive]: pathname == secondMenu.route,
                    })}
                    locale={locale}
                    href={secondMenu.route}>
                    {secondMenu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
