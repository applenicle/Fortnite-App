import { useGetNewsQuery } from '@/redux/services/FortniteApi';
import styles from './News.module.scss';
import { useRouter } from 'next/router';
import moment from 'moment';

const NewsComponent = (): JSX.Element => {
  const { locale } = useRouter();
  const { data, error, isLoading } = useGetNewsQuery(locale);
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
