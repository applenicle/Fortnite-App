import React from 'react';
import styles from './Sort.module.css';

const Sort = ({ data }: any) => {
  // console.log(data);
  return (
    <>
      <ul className={styles.sort__list}>
        <li className={styles.sort__item}>All </li>
        <li className={styles.sort__item}>New</li>
        <li className={styles.sort__item}>Diffrenent than yesterday</li>
        <li className={styles.sort__item}>Outfits</li>
      </ul>
    </>
  );
};

export default Sort;
