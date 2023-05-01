import Countdown from 'react-countdown';
import Title from '../Title';
import styles from './Timer.module.scss';
import { TimerNumber, TimerProps } from './Timer.props';

const Timer = ({ DailyTimer }: TimerProps) => {
  const DailyTimerNow = new Date(DailyTimer);
  const DayOf = 0;
  const renderer = ({ hours, minutes, seconds }: TimerNumber) => {
    return (
      <span>
        {hours}h {minutes}m {seconds}s
      </span>
    );
  };

  return (
    <>
      <div className={styles.timer}>
        <Title tag="h2">
          <div className={styles.time}>
            Refresh in
            <Countdown
              date={DailyTimerNow.setDate(DailyTimerNow.getDate() + DayOf)}
              renderer={renderer}
            />
          </div>
        </Title>
      </div>
    </>
  );
};

export default Timer;
