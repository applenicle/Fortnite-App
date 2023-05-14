import styles from './BattlepassSlider.module.scss';
import cn from 'classnames';
import { useGetBattlepassQuery } from '@/redux/services/FortniteApi';
import { useRouter } from 'next/router';
import Skeleton from '../Skeleton';
import Title from '../Title';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BattlepassSlider = (): JSX.Element => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const skeleton = [...new Array(20)].map((_: any, i: number) => <Skeleton key={i} />);
  const { locale } = useRouter();
  const { data, isLoading } = useGetBattlepassQuery(locale);
  if (isLoading) {
    return (
      <ul className={styles.list}>
        <li className={styles.content}>{skeleton}</li>
      </ul>
    );
  }
  return (
    <>
      <Title tag="h3">
        {[data].map((obj, i: number) => (
          <div key={i} className={styles.title}>
            {obj?.displayInfo.chapterSeason}
          </div>
        ))}
      </Title>
      <Slider {...settings}>
        {data?.rewards?.map((obj, i: number) => (
          <li key={i} className={styles.content}>
            <div className={styles.item}>
              <div className={styles.img}>
                <img src={obj.item.images.background} alt="bg" />
              </div>
              <div className={styles.text}>
                <div className={styles.name}>
                  <h4>{obj.item.name}</h4>
                </div>
              </div>
            </div>
            <div className={styles.info}>
              <div
                className={cn(styles.price, {
                  [styles.free]: obj.battlepass == 'free',
                })}>
                <span>{obj.price.amount == 0 ? 'in battlepass' : obj.price.amount}</span>
                <img
                  src={
                    obj.battlepass == 'free'
                      ? 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F31%2F3a%2Fdc%2F313adce7b5ac85fc49304e31cc66b8de.png&f=1&nofb=1&ipt=e2ad43580b2d1848ee68b5ef3d0bb7795a1c3829e11ac97c7868e5ac67aad21a&ipo=images'
                      : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Ffortnite%2Fimages%2F5%2F57%2FBattle_Star_-_Icon_-_Fortnite.png%2Frevision%2Flatest%3Fcb%3D20220720104128&f=1&nofb=1&ipt=358828a9f96f03ac68d1a21426693c96e1dd7b5f2bf830e0c990c29b3b7c08d7&ipo=images'
                  }
                  alt="star"
                />
              </div>
            </div>
            <div className={styles.number}>
              {i + 1}
              <div className={styles.paid}>{obj.battlepass == 'free' ? 'free!' : ''}</div>
            </div>
          </li>
        ))}
      </Slider>
    </>
  );
};

export default BattlepassSlider;
