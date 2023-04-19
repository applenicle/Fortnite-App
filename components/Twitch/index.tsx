import Link from 'next/link';
import styles from './Twitch.module.scss';
import { useGetTwitchQuery } from '@/redux/services/FortniteApi';
import moment from 'moment';
import Skeleton from '../Skeleton';

const Twitch = (): JSX.Element => {
  const { data, error, isLoading } = useGetTwitchQuery();
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

  return (
    <div className={styles.wrapper}>
      {data?.drops.map((obj) => (
        <div key={obj.name} className={styles.item}>
          <img src={obj.gameArtUrl} alt={obj.name} />
          <div className={styles.content}>
            <div className={styles.timer}>
              {moment(obj.startDate).format('ll')} - {moment(obj.endDate).format('ll')}
            </div>
            <h3>{obj.name}</h3>
            <p>{obj.description}</p>
            <div className={styles.link}>
              <Link href={obj.detailsURL}>Event Details</Link>
              <div>{obj.status}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Twitch;
