import React from 'react';
import { useGetAllShopQuery } from '@/redux/services/FortniteApi';
import { Layout, LayoutError, LayoutLoading, LayoutNoFetch } from '@/layouts';
import { ShopList, Skeleton, Timer } from '@/components';


const Shop = () => {
  const { data: allShop, error, isLoading } = useGetAllShopQuery()
  const dataShop = allShop?.shop;

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
  if (isLoading) {
    return (
      <LayoutLoading>
        <div className="shop__list">{skeleton}</div>;
      </LayoutLoading>
    );
  }
  if (error) {
    <LayoutError>ERROR TRY TO REFRESH PAGE</LayoutError>;
  }
  if (!allShop) {
    <LayoutNoFetch>NO DATA</LayoutNoFetch>;
  }

  return (
    <>
      <Layout>
        <Timer />
        {arr.map((obj: any) => (
          <div key={obj.id}>
            <h1 className="shop__title">{obj?.data[0]?.section?.name}</h1>
            <ul className="shop__list">
              <ShopList {...obj} />
            </ul>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default Shop;
