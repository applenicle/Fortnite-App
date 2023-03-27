import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { useSelector } from 'react-redux';

const Timer = () => {
  const { items } = useSelector((state: any) => state.ShopSlice);
  // const a = items?.currentRotation?.Daily;

  return (
    <>
      <div>
        Текущее время {moment().format('MMMM Do YYYY')}
        <span>
          <br />
          Обновление через {moment(items?.currentRotation?.Daily).endOf('minutes').fromNow()}
        </span>
      </div>
    </>
  );
};

export default Timer;
