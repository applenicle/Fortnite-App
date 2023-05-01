import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setFistIndex, setIsOpen } from '@/redux/slices/Menu';
import { navigation } from './data';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Menu = (): JSX.Element => {
  const { locale, pathname } = useRouter();

  const dispatch = useAppDispatch();
  const { firstIndex, isOpen } = useAppSelector((state) => state.MenuSlice);
  const checkIndex = (index: number) => {
    dispatch(setIsOpen(!isOpen));
    dispatch(setFistIndex(index));
  };
  return (
    <>
      <ul className={styles.menu}>
        {navigation.map((menu, i) => (
          <li key={i}>
            <div
              onClick={() => checkIndex(i)}
              className={cn(styles.link, {
                [styles.linkActive]: firstIndex == i && isOpen,
              })}>
              <FontAwesomeIcon icon={menu.icon} />
              {menu.label}
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <ul
              className={cn(styles.secondList, {
                [styles.secondListActive]: firstIndex == i && isOpen,
              })}>
              {menu.second.map((secondMenu, i) => (
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
        ))}
      </ul>
    </>
  );
};

export default Menu;
