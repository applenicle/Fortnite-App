import React from 'react';
import { useGetAllShopQuery } from '@/redux/services/FortniteApi';
import { Layout, LayoutError, LayoutLoading, LayoutNoFetch } from '@/layouts';
import { ShopList, Skeleton, Timer } from '@/components';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';


const Shop: NextPage = () => {
  const { locale } = useRouter();
  const { data: allShop, error, isLoading } = useGetAllShopQuery(locale)
 
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
        {/* <div className="shop__list">{skeleton}</div>; */}
      </LayoutLoading>
    );
  }
  if (error) {
    <LayoutError>ERROR TRY TO REFRESH PAGE</LayoutError>;
  }
  if (!allShop) {
    <Layout>
    <div className="shop__list">{skeleton}</div>;
  </Layout>
  }

  return (
    <>
     <Layout>
        <Timer DailyTimer={allShop?.currentRotation?.Daily}/>
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
