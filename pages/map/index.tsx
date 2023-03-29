import { Layout } from '@/layouts';
import { NextPage } from 'next';

import axios from 'axios';
import React from 'react';

const Map: NextPage = () => {
  const [data, setData] = React.useState([]);
  const fetchData = (url: string) => {
    axios
      .get(url, {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_FORTNITE_API_KEY,
        },
      })
      .then((res: any) => {
        setData(res.data.maps);
      });
  };
  // const a = data.map((obj) => obj?.url);
  // console.log(a);

  // совместно с account
  // https://fortniteapi.io/v1/lookup?username=Ree1une
  // https://fortniteapi.io/v1/stats?account=8b4c26bd3f10417a93302dccafce9a0b
  React.useEffect(() => {
    // 'https://fortniteapi.io/v1/maps/list'
    // 'https://fortniteapi.io/v3/challenges?season=current&lang=en'
    fetchData('https://fortniteapi.io/v1/maps/list');
  }, []);
  return (
    <Layout>
      {data.map((obj, i: number) => (
        <div key={i}>{/* <img src={obj.url} alt="" /> */}</div>
      ))}
    </Layout>
  );
};

export default Map;
