import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import { Menu } from '../Menu';
import Language from '../Language';
import Search from '../Search';
import Theme from '../Theme';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <div className={styles.logo}>FortniteStats</div>
      <Search />
      <Menu />
      <Language />
      <Theme />
    </div>
  );
};

export default Sidebar;
