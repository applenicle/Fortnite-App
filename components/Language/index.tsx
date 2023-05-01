import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setIsOpen, setHighlighterIndex } from '@/redux/slices/Languages';
import cn from 'classnames';
import styles from './Language.module.scss';
import { Fragment } from 'react';

const Language = (): JSX.Element => {
  const { asPath, locale, push } = useRouter();
  const { isOpen, highlighterIndex, options } = useAppSelector((state) => state.LanguagesSlice);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.selector__inner} onClick={() => dispatch(setIsOpen(!isOpen))}>
      <span className={styles.value}>
        <FontAwesomeIcon icon={faEarthAmericas} />
        {options.map((option, i: number) => (
          <Fragment key={i}>{locale == option.value ? option.label : ''}</Fragment>
        ))}
      </span>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul
        className={cn(styles.select, {
          [styles.show]: isOpen,
        })}>
        {options.map((option, index: number) => (
          <li
            key={option.value}
            onMouseEnter={() => dispatch(setHighlighterIndex(index))}
            onClick={() => push(asPath, undefined, { locale: option.value })}
            className={cn(styles.option, {
              [styles.selected]: locale == option.value,
              [styles.highlighted]: index === highlighterIndex,
            })}>
            {option.label}
            <FontAwesomeIcon icon={faCheck} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
