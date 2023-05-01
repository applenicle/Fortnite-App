import { useState } from 'react';
import styles from './FishCard.module.scss';
import { useGetFishQuery } from '@/redux/services/FortniteApi';
import { useRouter } from 'next/router';
import Modal from '../Modal';
import Skeleton from '../Skeleton';

const FishCard = (): JSX.Element => {
  const { locale } = useRouter();
  const { data, isLoading } = useGetFishQuery(locale);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const skeleton = [...new Array(20)].map((_: any, i: number) => <Skeleton key={i} />);
  if (isLoading) {
    return <div className={styles.fish}>{skeleton}</div>;
  }
  const onSelectItem = (index: number | null) => {
    setActiveItem(index);
  };

  return (
    <ul className={styles.fish}>
      {data?.fish.map((obj, i: number) => (
        <li key={obj.id}>
          <div onClick={() => onSelectItem(i)}>
            <img className={styles.img} src={obj.image} alt={obj.id} />
          </div>
          <Modal
            imageSrc={obj.image}
            altImg={obj.id}
            activeItem={activeItem}
            onSelectItem={onSelectItem}
            index={i}
            {...obj}>
            <li>{obj.description}</li>
            <li>Maximum stack {obj.maxStackSize}</li>
            <li>Heal {obj.heal}</li>
            <li>
              <span>{obj.sizeMin}</span> cm - <span>{obj.sizeMax}</span> cm
            </li>
          </Modal>
        </li>
      ))}
    </ul>
  );
};

export default FishCard;
