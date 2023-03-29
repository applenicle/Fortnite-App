import React from 'react';
import { NextPage } from 'next';
import { BattlepassSlider } from '@/components';
import { Layout } from '@/layouts';
import moment from 'moment';
import { useGetBattlepassQuery } from '@/redux/services/FortniteApi';
import { useRouter } from 'next/router';

const BattlePass: NextPage = () => {
  const { locale } = useRouter()
  const { data: battlepass, error, isLoading } = useGetBattlepassQuery(locale)

  return (
    <Layout>
      <div className="battlepass">
        {[battlepass].map((obj: any, i: number) => (
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
            <BattlepassSlider data={battlepass} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default BattlePass;
