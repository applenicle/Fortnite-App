import { useGetNewsQuery } from '@/redux/services/FortniteApi';
import styles from './News.module.scss';
import { useRouter } from 'next/router';
import moment from 'moment';
import Skeleton from '../Skeleton';

const NewsComponent = (): JSX.Element => {
  const { locale } = useRouter();
  const { data, error, isLoading } = useGetNewsQuery(locale);

  const skeleton = [...new Array(9)].map((_: any, i: number) => <Skeleton key={i} />);
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
      {data?.news.map((news) => (
        <div className={styles.item} key={news.id}>
          <div>
            <img src={news.image} alt={news.id} />
          </div>
          <div className={styles.text}>
            <h3>{news.title}</h3>
            <div>{moment(news.date).format('MMMM D YYYY')}</div>
            <p>{news.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
