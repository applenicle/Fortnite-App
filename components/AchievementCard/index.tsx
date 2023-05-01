import styles from './AchievementCard.module.scss';
import { useGetAchievementsQuery } from '@/redux/services/FortniteApi';
import { useRouter } from 'next/router';
import Skeleton from '../Skeleton';

const AchievementCard = (): JSX.Element => {
  const { locale } = useRouter();
  const { data, isLoading } = useGetAchievementsQuery(locale);
  const skeleton = [...new Array(20)].map((_: any, i: number) => <Skeleton key={i} />);
  if (isLoading) {
    return <div className={styles.inner}>{skeleton}</div>;
  }

  return (
    <>
      <div className={styles.inner}>
        {data?.achievements.map((obj) => (
          <div key={obj.id} className={styles.box}>
            <div className={styles.bar}></div>
            <div className={styles.content}>
              <div className={styles.image}>
                <img src={obj.image} alt={obj.internalId} />
              </div>
              <div className={styles.text}>
                <h3>{obj.name}</h3>
                <p>{obj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AchievementCard;
