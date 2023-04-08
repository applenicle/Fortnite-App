import styles from './AchivementCard.module.scss';
import { useGetAchievementsQuery } from '@/redux/services/FortniteApi';
import { useRouter } from 'next/router';

const AchivementCard = (): JSX.Element => {
  const { locale } = useRouter();
  const { data, error, isLoading } = useGetAchievementsQuery(locale);

  if (isLoading) {
    <></>;
  }
  return (
    <>
      <div className={styles.inner}>
        {data?.achievements.map((obj: any) => (
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

export default AchivementCard;