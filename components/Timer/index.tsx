import Countdown from 'react-countdown';
import React from 'react';

const Timer = ({ DailyTimer }:any ) => {
  const DailyTimerNow = new Date(DailyTimer)
  const DayOf = 0
  const renderer = ({ hours, minutes, seconds }: any) => {
    return <span> {hours}h {minutes}m {seconds}s</span>;
  };

  return (
    <>
      <div className='timer'>
        <h1>Fortnite Shop</h1>
        <h2>
          Refresh in
         <Countdown date={DailyTimerNow.setDate(DailyTimerNow.getDate() + DayOf)} renderer={renderer} />
        </h2>
      </div>
    </>
  );
};

export default Timer;
