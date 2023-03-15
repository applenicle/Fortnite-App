import React from 'react';
// import { useData } from '@/hooks/useData';
import { Layout, ShopList, Sort, Timer } from '../../components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setItems } from '@/redux/slices/Shop';

const Shop = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: any) => state.ShopSlice);
  const data = items.shop;
  const fetchData = async (url: string) => {
    await axios
      .get(url, {
        headers: { Authorization: process.env.NEXT_PUBLIC_FORTNITE_API_KEY },
      })
      .then(({ data }: any) => {
        // console.log(data);
        dispatch(setItems(data));
      });
  };
  React.useEffect(() => {
    fetchData('https://fortniteapi.io/v2/shop?lang=en');
  }, []);

  let obj: any = {};
  let arr: any = [];
  const sortedID = [...new Set(data?.map((obj: any) => obj?.section?.id))].map(
    (item) => (obj[item] = []),
  );
  data?.map((item: any) => {
    obj[item?.section?.id]?.push({ ...item });
  });

  Object.entries(obj).map(([id, data]) => {
    arr.push({ id, data });
  });
  return (
    <>
      <Layout>
        <Timer />
        <Sort />
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
