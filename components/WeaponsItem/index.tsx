import styles from './WeaponsItem.module.scss';
import { useGetWeaponsQuery } from '@/redux/services/FortniteApi';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { Fragment } from 'react';
import NoItem from '@/public/NoItem.png';

const WeaponsItem = (): JSX.Element => {
  const { locale } = useRouter();
  const { data, error, isLoading } = useGetWeaponsQuery(locale);
  const dataShop = data?.weapons;
  let obj: any = {};
  let arr: any = [];
  [...new Set(dataShop?.map((obj: any) => obj?.name))].map((item) => (obj[item] = []));

  dataShop?.map((item: any) => {
    obj[item?.name]?.push({ ...item });
  });

  Object.entries(obj).map(([name, data]) => {
    arr.push({ name, data });
  });

  const skeleton = [...new Array(15)].map((_: any, i: number) => <div key={i}>Skelet</div>);

  console.log(arr);

  if (isLoading) {
    return <>{skeleton}</>;
  }

  // const skeleton = [...new Array(15)].map((_: any, i: number) => <Skeleton key={i} />);
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
                <td
                  className={cn(styles.rarity, {
                    [styles.rarity__common]: obj.rarity.toLowerCase().includes('common')
                      ? styles.rarity__common
                      : '',
                    [styles.rarity__uncommon]: obj.rarity.toLowerCase().includes('uncommon')
                      ? styles.rarity__uncommon
                      : '',
                    [styles.rarity__rare]: obj.rarity.toLowerCase().includes('rare')
                      ? styles.rarity__rare
                      : '',
                    [styles.rarity__epic]: obj.rarity.toLowerCase().includes('epic')
                      ? styles.rarity__epic
                      : '',
                    [styles.rarity__legendary]: obj.rarity.toLowerCase().includes('legendary')
                      ? styles.rarity__legendary
                      : '',
                    [styles.rarity__mythic]: obj.rarity.toLowerCase().includes('mythic')
                      ? styles.rarity__mythic
                      : '',
                    [styles.rarity__exotic]: obj.rarity.toLowerCase().includes('exotic')
                      ? styles.rarity__exotic
                      : '',
                    [styles.rarity__transcendent]: obj.rarity.toLowerCase().includes('transcendent')
                      ? styles.rarity__transcendent
                      : '',
                  })}>
                  {obj.rarity}
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
