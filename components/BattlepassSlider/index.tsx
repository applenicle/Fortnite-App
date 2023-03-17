import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BattlepassSlider = ({ data }: any) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 7,
  };
  return (
    <>
      <Slider {...settings}>
        {data?.rewards?.map((obj: any, i: number) => (
          <div
            className={obj.battlepass == 'free' ? 'battlepass__inner free' : 'battlepass__inner'}
            key={i}>
            <div className="battlepass__item">
              <div className="battlepass__img">
                <img src={obj.item.images.background} alt="bg" />
              </div>
              <div className="battlepass__text">
                <div className="battlepass__name">
                  <h4>{obj.item.name}</h4>
                </div>
              </div>
            </div>
            <div className="battlepass__info">
              <div className="battlepass__price">
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
            <div className="battlepass__number">
              {i + 1}
              <div className="battlepass__paid">{obj.battlepass == 'free' ? 'free!' : ''}</div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default BattlepassSlider;
