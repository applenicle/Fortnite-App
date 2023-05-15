import { useGetNewsQuery } from '@/redux/services/FortniteApi';
import styles from './News.module.scss';
import { useRouter } from 'next/router';
import Skeleton from '../Skeleton';
import { format } from 'date-fns';
import Image from 'next/image';

const NewsComponent = (): JSX.Element => {
  const { locale } = useRouter();
  const { data, isLoading } = useGetNewsQuery(locale);
  const skeleton = [...new Array(9)].map((_: any, i: number) => <Skeleton key={i} />);
  if (isLoading) {
    return <div className={styles.wrapper}>{skeleton}</div>;
  }

  return (
    <div className={styles.wrapper}>
      {data?.news.map((news) => (
        <div className={styles.item} key={news.id}>
          <div>
            <Image
              src={news.image}
              alt={news.id}
              height={221}
              width={339}
              style={{ height: 'auto', width: '100%' }}
            />
          </div>
          <div className={styles.text}>
            <h3>{news.title}</h3>
            <div>{format(new Date(news.date), 'MMMM d yyyy')}</div>
            <p>{news.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
