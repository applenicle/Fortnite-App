import Link from 'next/link';
import React from 'react';

const ShopList = ({ data }: any) => {
  return (
    <>
      {data?.map((obj: any) => (
        <li className="shop__item" key={obj.offerId}>
          <Link className="shop__link" href={`shop/${obj.mainId}`}>
            <div className="shop__img-url">
              <img
                className="shop__img"
                src={obj.displayAssets[0]?.background ==  undefined ? obj.displayAssets[0]?.background : obj.granted[0]?.images?.background }
                alt={obj.mainId}
              />
            </div>
          </Link>
          <div className="shop__text-content">
            <div>
              <h4 className="shop__text-name">{obj.displayName}</h4>
              <p className="shop__text-type">{obj.granted[0].type.name}</p>
            </div>
            <div className="shop__text-price">
              <img
                className="vbucks"
                src="https://fortnite-api.com/images/vbuck.png"
                alt="vbucks"
              />
              <span>{obj.price?.finalPrice}</span>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default ShopList;
