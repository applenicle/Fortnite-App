import { useGetCrewQuery } from '@/redux/services/FortniteApi';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Modal from '../Modal';
import styles from './CrewCard.module.scss';
import Skeleton from '../Skeleton';
import { format } from 'date-fns';

const CrewCard = () => {
  const { locale } = useRouter();
  const { data, isLoading } = useGetCrewQuery(locale);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const onSelectItem = (index: number | null) => {
    setActiveItem(index);
  };
  const skeleton = [...new Array(20)].map((_: any, i: number) => <Skeleton key={i} />);
  if (isLoading) {
    return <div className={styles.crew}>{skeleton}</div>;
  }
  return (
    <ul className={styles.crew}>
      {data?.history.map((obj, i: number) => (
        <li key={obj.date}>
          <div className={styles.img} onClick={() => setActiveItem(i)}>
            <img src={obj.rewards[0].item?.images.background} alt={obj?.rewards[0].item?.name} />
            <h3>{obj.rewards[0].item.name}</h3>
          </div>
          <div className={styles.data}>{format(new Date(obj.date), 'MMMM yyyy')}</div>
          <Modal
            details={obj.rewards[0].item.description}
            activeItem={activeItem}
            altImg={obj?.rewards[0].item?.name}
            imageSrc={obj.rewards[0].item?.images.icon}
            name={obj.rewards[0].item.name}
            onSelectItem={onSelectItem}
            rarity={obj?.rewards[0].item.rarity.id}
            index={i}
            {...obj}>
            <li>{obj.rewards[0].item.introduction.chapter}</li>
            <li>{obj.rewards[0].item.type.name}</li>
            <li>
              <div>
                Rewards:
                <span>{obj?.descriptions?.battlepass},</span>
                <span>{obj?.descriptions?.title},</span>
                <span>{obj?.descriptions?.vbucksTitle}</span>
              </div>
            </li>
          </Modal>
        </li>
      ))}
    </ul>
  );
};

export default CrewCard;
