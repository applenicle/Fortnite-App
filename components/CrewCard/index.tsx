import { useGetCrewQuery } from '@/redux/services/FortniteApi';
import { useRouter } from 'next/router';
import React from 'react';
import Modal from '../Modal';
import styles from './CrewCard.module.scss';
import moment from 'moment';

const CrewCard = () => {
  const [activeItem, setActiveItem] = React.useState<number | null>(null);
  const onSelectItem = (index: number | null) => {
    setActiveItem(index);
  };
  const { locale } = useRouter();
  const { data, error, isLoading } = useGetCrewQuery(locale);

  if (isLoading) {
    <></>;
  }

  return (
    <ul className={styles.crew}>
      {data?.history.map((obj: any, i: number) => (
        <li key={obj.date}>
          <div className={styles.img} onClick={() => setActiveItem(i)}>
            <img src={obj.rewards[0].item?.images.background} alt={obj?.rewards[0].item?.name} />
            <h3>{obj.rewards[0].item.name}</h3>
          </div>
          <div className={styles.data}>{moment(obj.date).format('MMMM YYYY')}</div>
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
