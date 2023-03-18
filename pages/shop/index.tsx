import React from 'react';
import { Layout, ShopList, Skeleton, Timer } from '../../components';
import { nameAPI as shopAPI } from '@/redux/services/ShopService';

const Shop = () => {
  const { data: shop, error, isLoading } = shopAPI.useFetchAllShopQuery('shop');

  const dataShop = shop?.shop;
  let obj: any = {};
  let arr: any = [];
  const sortedID = [...new Set(dataShop?.map((obj: any) => obj?.section?.id))].map(
    (item) => (obj[item] = []),
  );
  dataShop?.map((item: any) => {
    obj[item?.section?.id]?.push({ ...item });
  });

  Object.entries(obj).map(([id, data]) => {
    arr.push({ id, data });
  });
  const skeleton = [...new Array(15)].map((_: any, i: number) => <Skeleton key={i} />);

  return (
    <>
      <Layout>
        <Timer />
        <>{error && <>ERROR TRY TO REFRESH PAGE</>}</>
        {isLoading && true ? (
          <div className="shop__list">{skeleton}</div>
        ) : (
          arr.map((obj: any) => (
            <div key={obj.id}>
              <h1 className="shop__title">{obj?.data[0]?.section?.name}</h1>
              <ul className="shop__list">
                <ShopList {...obj} />
              </ul>
            </div>
          ))
        )}
      </Layout>
    </>
  );
};

export default Shop;
