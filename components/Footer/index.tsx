import { format } from 'date-fns';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import Link from 'next/link';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>All rights reserved &copy; {format(new Date(), 'yyyy')}</div>
      <Link href="https://t.me/applenicle">Our social media</Link>
      {/* <Link href="@applenicle">Our social media</Link> */}
    </footer>
  );
};

export default Footer;
