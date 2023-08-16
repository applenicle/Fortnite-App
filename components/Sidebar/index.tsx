import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import Language from '../Language';
import Search from '../Search';
import Theme from '../Theme';
import Title from '../Title';
import Menu from '../Menu';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <div className={styles.logo}>
          <Title tag="h2" >Fortnite Stats</Title>
      </div>
      <Search />
      <Menu />
      <Language />
      <Theme />
    </div>
  );
};

export default Sidebar;
