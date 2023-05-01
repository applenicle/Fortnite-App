import { UserName } from '@/redux/types/UserName';
import styles from './Stats.module.scss';
import cn from 'classnames';

const Stats = ({ name, global_stats }: UserName) => {
  if (name == undefined) {
    return <>Не найден ник</>;
  }
  return (
    <div>
      <h3 className={styles.nickname}>{name}</h3>
      <div className={styles.inner}>
        <div className={styles.box}>
          <div className={styles.title}>
            <h3>Solo</h3>
          </div>
          <div className={styles.text}>
            <div className={styles.container}>
              <div className={styles.subtitle}>K/D</div>
              <div className={styles.value}>{global_stats?.solo?.kd}</div>
              <div
                className={cn(styles.bar, {
                  [styles.red]: global_stats?.solo?.kd <= 1,
                  [styles.green]: global_stats?.solo?.kd >= 1,
                })}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Kills</div>
              <div className={styles.value}>{global_stats?.solo?.kills}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Deaths</div>
              <div className={styles.value}>
                {Math.round(global_stats?.solo?.kills / global_stats?.solo?.kd)}
              </div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Matches played</div>
              <div className={styles.value}>{global_stats?.solo?.matchesplayed}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Win rate</div>
              <div className={styles.value}>{global_stats?.solo?.winrate}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Top 25</div>
              <div className={styles.value}>{global_stats?.solo?.placetop25}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Top 10</div>
              <div className={styles.value}>{global_stats?.solo?.placetop10}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Wins</div>
              <div className={styles.value}>{global_stats?.solo?.placetop1}</div>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>
            <h3>Duo</h3>
          </div>
          <div className={styles.text}>
            <div className={styles.container}>
              <div className={styles.subtitle}>K/D</div>
              <div className={styles.value}>{global_stats?.duo?.kd}</div>
              <div
                className={cn(styles.bar, {
                  [styles.red]: global_stats?.duo?.kd <= 1,
                  [styles.green]: global_stats?.duo?.kd >= 1,
                })}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Kills</div>
              <div className={styles.value}>{global_stats?.duo?.kills}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Deaths</div>
              <div className={styles.value}>
                {Math.round(global_stats?.duo?.kills / global_stats?.duo?.kd)}
              </div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Matches played</div>
              <div className={styles.value}>{global_stats?.duo?.matchesplayed}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Win rate</div>
              <div className={styles.value}>{global_stats?.duo?.winrate}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Top 12</div>
              <div className={styles.value}>{global_stats?.duo?.placetop12}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Top 5</div>
              <div className={styles.value}>{global_stats?.duo?.placetop5}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Wins</div>
              <div className={styles.value}>{global_stats?.duo?.placetop1}</div>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>
            <h3>Trio</h3>
          </div>
          <div className={styles.text}>
            <div className={styles.container}>
              <div className={styles.subtitle}>K/D</div>
              <div className={styles.value}>{global_stats?.trio?.kd}</div>
              <div
                className={cn(styles.bar, {
                  [styles.red]: global_stats?.trio?.kd <= 1,
                  [styles.green]: global_stats?.trio?.kd >= 1,
                })}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Kills</div>
              <div className={styles.value}>{global_stats?.trio?.kills}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Deaths</div>
              <div className={styles.value}>
                {Math.round(global_stats?.trio?.kills / global_stats?.trio?.kd)}
              </div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Matches played</div>
              <div className={styles.value}>{global_stats?.trio?.matchesplayed}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Win rate</div>
              <div className={styles.value}>{global_stats?.trio?.winrate}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Top 6</div>
              <div className={styles.value}>{global_stats?.trio?.placetop6}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Top 3</div>
              <div className={styles.value}>{global_stats?.trio?.placetop3}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Wins</div>
              <div className={styles.value}>{global_stats?.trio?.placetop1}</div>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>
            <h3>Squad</h3>
          </div>
          <div className={styles.text}>
            <div className={styles.container}>
              <div className={styles.subtitle}>K/D</div>
              <div className={styles.value}>{global_stats?.squad?.kd}</div>
              <div
                className={cn(styles.bar, {
                  [styles.red]: global_stats?.squad?.kd <= 1,
                  [styles.green]: global_stats?.squad?.kd >= 1,
                })}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Kills</div>
              <div className={styles.value}>{global_stats?.squad?.kills}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Deaths</div>
              <div className={styles.value}>
                {Math.round(global_stats?.squad?.kills / global_stats?.squad?.kd)}
              </div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Matches played</div>
              <div className={styles.value}>{global_stats?.squad?.matchesplayed}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Win rate</div>
              <div className={styles.value}>{global_stats?.squad?.winrate}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Top 6</div>
              <div className={styles.value}>{global_stats?.squad?.placetop6}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Top 3</div>
              <div className={styles.value}>{global_stats?.squad?.placetop3}</div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.subtitle}>Wins</div>
              <div className={styles.value}>{global_stats?.squad?.placetop1}</div>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
