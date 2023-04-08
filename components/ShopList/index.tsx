import React from 'react';
import Link from 'next/link';
import styles from './ShopList.module.scss';
import Title from '../Title';

const ShopList = ({ data }: any) => {
  return (
    <>
      <Title tag="h3">{data[0]?.section?.name}</Title>
      <ul className={styles.list}>
        {data?.map((obj) => (
          <li className={styles.item} key={obj.offerId}>
            <Link className={styles.link} href={`shop/${obj.mainId}`}>
              <img
                className={styles.img}
                src={
                  obj.displayName.toLowerCase().includes(' bundle') ||
                  obj.displayName.toLowerCase().includes(' wear')
                    ? obj.displayAssets[0]?.background
                    : obj.granted[0]?.images?.background
                }
                alt={obj.mainId}
              />
            </Link>
            <div className={styles.content}>
              <div>
                <h4 className={styles.name}>{obj.displayName}</h4>
                <p className={styles.type}>{obj.granted[0].type.name}</p>
              </div>
              <div className={styles.price}>
                <img src="https://fortnite-api.com/images/vbuck.png" alt="vbucks" />
                <span>{obj.price?.finalPrice}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShopList;
