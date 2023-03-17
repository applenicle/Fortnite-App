import React from 'react';
import axios from 'axios';
import { BattlepassSlider, Layout } from '@/components';
import moment from 'moment';

const BattlePass = () => {
  const [data, setData] = React.useState([]);

  const fetchData = async (url: string) => {
    await axios
      .get(url, {
        headers: { Authorization: process.env.NEXT_PUBLIC_FORTNITE_API_KEY },
      })
      .then(({ data }: any) => {
        console.log(data);
        setData(data);
      });
  };

  // const dataBattlePass = [data]?.rewards;
  React.useEffect(() => {
    fetchData('https://fortniteapi.io/v2/battlepass?lang=en&season=current');
    return () => {};
  }, []);

  return (
    <Layout>
      <div className="battlepass">
        {[data].map((obj: any, i: number) => (
          <div key={i}>
            <div className="battlepass__title">
              {obj?.displayInfo?.chapterSeason}
              <div>
                Season ends:
                <span>
                  {moment(obj?.seasonDates?.end).endOf('minutes').fromNow(obj?.seasonDates?.begin)}
                </span>
              </div>
            </div>
            <BattlepassSlider data={data} />
          </div>
        ))}
        {/* {data.displayInfo?.chapterSeason} */}

        {/* {data.map((obj: any, i: number) => (
          <div key={i}>
          </div>
        ))} */}
      </div>
    </Layout>
  );
};

export default BattlePass;
