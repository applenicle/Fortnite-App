import React from 'react';
import styles from './Paragraph.module.scss';
import cn from 'classnames';
import { ParagraphProps } from './Paragraph.props';

const Paragraph = ({ children, size = 'md', className, ...props }: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.text, className, {
        [styles.lg]: size == 'lg',
        [styles.md]: size == 'md',
        [styles.sm]: size == 'sm',
      })}
      {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
