import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import Sidebar from '../Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { navigation } from '../Menu/data';

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  return (
    <header className={cn(className, styles.header)} {...props}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>{navigation.map((menu) => menu?.label)}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
