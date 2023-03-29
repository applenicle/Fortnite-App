import { Layout } from '@/layouts';
import axios from 'axios';
import { NextPage } from 'next';
import React from 'react';

const Fish: NextPage = () => {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(true);

  const fetchData = async (url: string) => {
    await axios
      .get(url, {
        headers: { Authorization: process.env.NEXT_PUBLIC_FORTNITE_API_KEY },
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
      <ul className="fish">
        {data.map((obj: any) => (
          <div>
            <div onClick={() => setOpen(!open)} className="fish__inner" key={obj.id}>
              <img className="fish__img" src={obj.image} alt={obj.id} />
              <h3>{obj.name}</h3>
            </div>
            <div className={open === false ? 'modal modal__open' : 'modal'}>
              {/* <h3>{obj.name}</h3> */}
              {/* <p>{obj.details}</p> */}
              {/* <span>Rarity: {obj.rarity}</span> */}
              {/* <div>Макс колво{obj.maxStackSize}</div> */}
              {/* <p>Description: {obj.description}</p> */}
            </div>
          </div>
        ))}
      </ul>
    </Layout>
  );
};

export default Fish;
