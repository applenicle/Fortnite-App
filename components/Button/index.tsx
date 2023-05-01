import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.active]: appearance == 'active',
      })}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
