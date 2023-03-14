import React from 'react';
import axios from 'axios';
import { Layout, ShopList, Sort, Timer } from '../../components';
import Link from 'next/link';

const env = process.env.NEXT_PUBLIC_FORTNITE_API_KEY;

const Shop = () => {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState([]);

  const fetchData = async (url: string) => {
    await axios
      .get(url, {
        headers: { Authorization: env },
      })
      .then(({ data }: any) => {
        console.log(data.shop);
        setData(data.shop);
      });
  };

  React.useEffect(() => {
    fetchData('https://fortniteapi.io/v2/shop?lang=en');
    return () => {};
  }, []);

  let obj: any = {};
  let arr: any = [];
  const sortedID = [...new Set(data?.map((obj: any) => obj?.section?.id))].map(
    (item) => (obj[item] = []),
  );
  data.map((item: any) => {
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
            <h1>{obj?.data[0]?.section?.name}</h1>
            <ul className="grid">
              <ShopList {...obj} />
            </ul>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default Shop;
