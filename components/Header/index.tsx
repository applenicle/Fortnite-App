import { HeaderProps } from './Header.props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navigation } from '../Menu/data';
import Title from '../Title';
import Language from '../Language';
import Search from '../Search';
import Theme from '../Theme';
import { setFistIndex, setIsOpen } from '@/redux/slices/Menu';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const { locale, pathname } = useRouter();
  const dispatch = useAppDispatch();
  const { firstIndex, isOpen } = useAppSelector((state) => state.MenuSlice);
  const checkIndex = (index: number) => {
    dispatch(setIsOpen(!isOpen));
    dispatch(setFistIndex(index));
  };
  return (
    <header className={cn(className, styles.header)} {...props}>
      <nav className={styles.nav}>
        <Title tag="h2">Fortnite Stats</Title>
        <div className={styles.multi}>
          <Theme />
          <Language />
        </div>
        <Search />
        <ul className={styles.list}>
          {navigation.map((menu, i: number) => (
            <li
              key={i}
              onClick={() => checkIndex(i)}
              className={cn(styles.link, {
                [styles.linkActive]: firstIndex == i && isOpen,
              })}>
              <div>
                {menu.label}
                <FontAwesomeIcon icon={faCaretDown} />
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
      </nav>
    </header>
  );
};

export default Header;
