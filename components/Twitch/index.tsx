import Link from 'next/link';
import styles from './Twitch.module.scss';
import { useGetTwitchQuery } from '@/redux/services/FortniteApi';
import Skeleton from '../Skeleton';
import { format } from 'date-fns';

const Twitch = (): JSX.Element => {
  const { data, isLoading } = useGetTwitchQuery(null);
  const skeleton = [...new Array(20)].map((_: any, i: number) => <Skeleton key={i} />);
  if (isLoading) {
    return <div className={styles.wrapper}>{skeleton}</div>;
  }

  return (
    <div className={styles.wrapper}>
      {data?.drops.map((obj) => (
        <div key={obj.name} className={styles.item}>
          <img src={obj.gameArtUrl} alt={obj.name} />
          <div className={styles.content}>
            <div className={styles.timer}>
              {format(new Date(obj.startDate), 'MMM d yyyy')}-
              {format(new Date(obj.endDate), 'MMM d yyyy')}
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
