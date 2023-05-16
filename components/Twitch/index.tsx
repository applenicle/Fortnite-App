import Link from 'next/link';
import styles from './Twitch.module.scss';
import { useGetTwitchQuery } from '@/redux/services/FortniteApi';
import Skeleton from '../Skeleton';
import { format } from 'date-fns';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { options } from '../Language/languageList';

const Twitch = (): JSX.Element => {
  const { locale } = useRouter();
  const { data, isLoading } = useGetTwitchQuery(null);
  const skeleton = [...new Array(20)].map((_: any, i: number) => <Skeleton key={i} />);
  if (isLoading) {
    return <div className={styles.wrapper}>{skeleton}</div>;
  }

  return (
    <div className={styles.wrapper}>
      {data?.drops.map((obj) => (
        <div key={obj.name} className={styles.item}>
          <Image src={obj.gameArtUrl} alt={obj.name} height={120} width={120} />
          <div className={styles.content}>
            <div className={styles.timer}>
              {options.map((option, i: number) => (
                <div key={i}>
                  {locale == option.value
                    ? format(new Date(obj.startDate), 'dd MMMM yyyy', { locale: option.dateFns })
                    : ''}
                  <span>
                    {locale == option.value
                      ? ` - ${format(new Date(obj.endDate), 'dd MMMM yyyy', {
                          locale: option.dateFns,
                        })}`
                      : ''}
                  </span>
                </div>
              ))}
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
