import { Modal } from '@/components';
import { Layout } from '@/layouts';
import { useGetFishQuery } from '@/redux/services/FortniteApi';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Fish: NextPage = () => {
  const [activeItem, setActiveItem] = React.useState<number | null>(null);

  const { locale } = useRouter();
  const { data, error, isLoading } = useGetFishQuery(locale);
  console.log(data)
  const onSelectItem = (index:number | null) => {
    setActiveItem(index);
  };

  if(isLoading) {
    <></>
  }

  return (
    <Layout>
      <h3 className="fish__title">All fish</h3>
      <ul className="fish">
        {data?.fish.map((obj: any, i:number) => (
          <li key={obj.id}>
            <div onClick={() => onSelectItem(i)}>
              <img className="fish__img" src={obj.image} alt={obj.id} />
            </div>
            <div className={activeItem === i ? 'modal modal__open' : 'modal'}>
              <div className="fish__inner">
                <div className="fish__close">
                  <FontAwesomeIcon 
                    onClick={(e) => {
                      e.stopPropagation()
                      onSelectItem(null)
                    }} 
                    icon={faXmark} 
                  />
                </div>
                <img src={obj.image} alt={obj.id} />
                <div className="fish__content">
                  <h3>{obj.name}</h3>
                  <p>{obj.details}</p>
                  <ul>
                    <li className={
                      `
                        ${obj.rarity.toLowerCase().includes('common') ? 'rarity-common' : 'rarity'}
                        ${obj.rarity.toLowerCase().includes('uncommon') ? 'rarity-uncommon' : 'rarity'}
                        ${obj.rarity.toLowerCase().includes('rare') ? 'rarity-rare' : 'rarity'}
                        ${obj.rarity.toLowerCase().includes('epic') ? 'rarity-epic' : 'rarity'}
                        ${obj.rarity.toLowerCase().includes('legendary') ? 'rarity-legendary' : 'rarity'}`
                    }>
                      {obj.rarity}
                    </li>
                    <li>{obj.description}</li>
                    <li>Maximum stack {obj.maxStackSize}</li>
                    <li>Heal {obj.heal}</li>
                    <li><span>{obj.sizeMin}</span> cm - <span>{obj.sizeMax}</span> cm</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Fish;
