import { Layout } from '@/components';
import axios from 'axios';
import React from 'react';

const Fish = () => {
  const env = process.env.NEXT_PUBLIC_FORTNITE_API_KEY;
  const [data, setData] = React.useState([]);

  const fetchData = async (url: string) => {
    await axios
      .get(url, {
        headers: { Authorization: env },
      })
      .then(({ data }: any) => {
        console.log(data.fish);
        setData(data.fish);
      });
  };

  React.useEffect(() => {
    fetchData('https://fortniteapi.io/v1/loot/fish?lang=en');
    return () => {};
  }, []);
  return (
    <Layout>
      <ul className="grid">
        {data.map((obj: any) => (
          <div key={obj.id}>
            <img className="img" src={obj.image} alt={obj.id} />
          </div>
        ))}
      </ul>
    </Layout>
  );
};

export default Fish;
