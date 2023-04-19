import styles from './WeaponsItem.module.scss';
import { useGetWeaponsQuery } from '@/redux/services/FortniteApi';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NoItem from '@/public/NoItem.png';
import Rarity from '../Rarity';
import Skeleton from '../Skeleton';
import { checkData } from '@/hooks/Bounce';

const WeaponsItem = (): JSX.Element => {
  const { locale } = useRouter();
  const { data, error, isLoading } = useGetWeaponsQuery(locale);

  const skeleton = [...new Array(20)].map((_: any, i: number) => <Skeleton key={i} />);
  if (isLoading) {
    return <table className={styles.table}>{skeleton}</table>;
  }
  if (error) {
    return <>ERROR TRY RELOAD PAGE</>;
  }
  if (!data) {
    return <>NO DATA</>;
  }

  const dataWeapon = data?.weapons;
  let obj: any = {};
  let arr: any = [];
  [...new Set(dataWeapon?.map((obj: any) => obj?.name))].map((item) => (obj[item] = []));

  dataWeapon?.map((item: any) => {
    obj[item?.name]?.push({ ...item });
  });

  Object.entries(obj).map(([name, data]) => {
    arr.push({ name, data });
  });

  return (
    <table className={styles.table}>
      {arr?.map(({ name, data }, i: number) => (
        <Fragment key={i}>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Rarity</th>
              <th>Crit Dmg</th>
              <th>DPS</th>
              <th>Fire Rate</th>
              <th>Mag Size</th>
              <th>Reload</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={data.length + 1}>{name}</td>
            </tr>
            {data.map((obj) => (
              <tr key={obj.id}>
                <td>
                  <img
                    src={obj.images.background == null ? NoItem.src : obj.images.background}
                    alt={obj.id}
                  />
                </td>
                <td>
                  <Rarity rarity={obj.rarity}>{obj.rarity}</Rarity>
                </td>
                <td>{Math.floor(obj.mainStats.DmgPB * obj.mainStats.DamageZone_Critical)}</td>
                <td>{Math.floor(obj.mainStats.DmgPB)}</td>
                <td>{obj.mainStats.FiringRate}</td>
                <td>{obj.mainStats.ClipSize}</td>
                <td>{obj.mainStats.ReloadTime}</td>
              </tr>
            ))}
          </tbody>
        </Fragment>
      ))}
    </table>
  );
};

export default WeaponsItem;
