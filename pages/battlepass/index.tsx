import React from 'react';
import axios from 'axios';
import { Layout } from '@/components';

const BattlePass = () => {
  const env = process.env.NEXT_PUBLIC_FORTNITE_API_KEY;
  const [data, setData] = React.useState([]);

  const fetchData = async (url: string) => {
    await axios
      .get(url, {
        headers: { Authorization: env },
      })
      .then(({ data }: any) => {
        console.log(data.rewards);
        setData(data.rewards);
      });
  };

  React.useEffect(() => {
    fetchData('https://fortniteapi.io/v2/battlepass?lang=en&season=current');
    return () => {};
  }, []);

  return (
    <Layout>
      <ul className="grid-bp">
        {data.map((obj: any) => (
          <div>
            {/* {obj?.displayInfo} */}
            <img className="img" src={obj.item.images.background} alt="" />
            {obj.price.amount} цена звезд
            {obj.battlepass == 'free' ? 'free' : ''}
            <br />
            {obj.page} номер стр
          </div>
        ))}
      </ul>
    </Layout>
  );
};

export default BattlePass;
