import { useGetModesQuery } from '@/redux/services/FortniteApi';
import { useRouter } from 'next/router';
import styles from './Modes.module.scss';
import Skeleton from '../Skeleton';
import { modes } from '@/redux/types/Modes';
import Image from 'next/image';

type arr = {
  enabled: boolean | string;
  data: any;
};

const GameModes = (): JSX.Element => {
  const { locale } = useRouter();
  const { data, error, isLoading } = useGetModesQuery(locale);
  const skeleton = [...new Array(20)].map((_: any, i: number) => <Skeleton key={i} />);
  if (isLoading) {
    return <div className={styles.wrapper}>{skeleton}</div>;
  }
  if (error) {
    return <>ERROR TRY RELOAD PAGE</>;
  }
  if (!data) {
    return <>NO DATA</>;
  }

  const dataSorted = data?.modes;
  let obj: any = {};
  let arr: arr[] = [];
  [...new Set(dataSorted?.map((obj) => obj?.enabled))].map((item: any) => (obj[item] = []));
  dataSorted?.map((item: any) => {
    obj[item?.enabled]?.push({ ...item });
  });
  Object.entries(obj).map(([enabled, data]) => {
    arr.push({ enabled, data });
  });
  return (
    <>
      {arr?.map(({ enabled, data }, i: number) => (
        <div className={styles.wrapper} key={i}>
          {enabled == 'true'
            ? data.map((obj: modes) => (
                <div className={styles.item} key={obj.id}>
                  <div className={styles.image}>
                    {obj.image ? (
                      <Image
                        src={obj.image}
                        alt={obj.id}
                        height={232}
                        width={413}
                        style={{ height: 'auto', width: '100%' }}
                      />
                    ) : null}
                  </div>
                  <div className={styles.title}>
                    {obj.matchmakingIcon == null ? (
                      <h3>{obj.name}</h3>
                    ) : (
                      <>
                        {obj.matchmakingIcon ? (
                          <Image
                            src={obj.matchmakingIcon}
                            alt={obj.matchmakingIcon}
                            height={32}
                            width={32}
                            style={{ height: 'auto', width: '100%' }}
                          />
                        ) : null}
                        <h3>{obj.name}</h3>
                      </>
                    )}
                  </div>
                </div>
              ))
            : ''}
        </div>
      ))}
    </>
  );
};

export default GameModes;
