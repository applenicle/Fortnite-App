import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navigation } from './data';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import cn from 'classnames';

const SidebarItem = ({ item }): JSX.Element => {
  const { locale, pathname } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className={styles.menu}>
        <li
          onClick={() => setOpen(!open)}
          className={cn(styles.item, {
            [styles.itemActive]: open,
          })}>
          <div className={styles.title}>
            <FontAwesomeIcon icon={item.icon} />
            <h3>{item.label}</h3>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <ul
            className={cn(styles.content, {
              [styles.contentActive]: open,
            })}>
            {item.second.map((secondMenu, i: number) => (
              <li key={i}>
                <Link
                  className={cn(styles.linkSecond, {
                    [styles.linkSecondActive]: pathname === secondMenu.route,
                  })}
                  locale={locale}
                  href={secondMenu.route}>
                  {secondMenu.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

const Menu = () => {
  return (
    <div>
      {navigation.map((item, i: number) => (
        <SidebarItem key={i} item={item} />
      ))}
    </div>
  );
};

export default Menu;
