import styles from './WeaponsItem.module.scss';
import { useGetWeaponsQuery } from '@/redux/services/FortniteApi';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NoItem from '@/public/NoItem.png';
import Rarity from '../Rarity';
import Skeleton from '../Skeleton';
import { weapons } from '@/redux/types/Weapons';
import Image from 'next/image';

type arr = {
  name: string;
  data: any;
};

const WeaponsItem = (): JSX.Element => {
  const { locale } = useRouter();
  const { data, isLoading } = useGetWeaponsQuery(locale);
  const skeleton = [...new Array(20)].map((_: any, i: number) => <Skeleton key={i} />);
  if (isLoading) {
    return <table className={styles.table}>{skeleton}</table>;
  }

  const dataWeapon = data?.weapons;
  let obj: any = {};
  let arr: arr[] = [];
  [...new Set(dataWeapon?.map((obj) => obj?.name))].map((item) => (obj[item] = []));

  dataWeapon?.map((item) => {
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
            {data.map((obj: weapons) => (
              <tr key={obj.id}>
                <td>
                  <Image
                    src={obj.images.background == null ? NoItem.src : obj.images.background}
                    alt={obj.id}
                    height={128}
                    width={128}
                    style={{ height: 'auto', width: '100%' }}
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
