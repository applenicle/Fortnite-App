import React from 'react'

const Stats = ({name, global_stats,accountLevelHistory}:any) => {
  return (
    <div>
      <h3 className='stats__nickname'>{name}</h3>
      {/* минут в матче  */}
      {/* season {accountLevelHistory[0]?.season} */}
      {/* Current Level {accountLevelHistory.lenght?.level} */}
    <div className="stats__inner">
  
  
    <div className='stats__box'>
    <div className="stats__title">
      <h3>Solo</h3>
      </div>
      <div className='stats__text'>
        <div className="stats__container">
          <div className="stats__container-title">K/D</div>
          <div className="stats__container-value">{global_stats?.solo?.kd}</div>
          <div className={ global_stats?.solo?.kd > 1 ? "stats__container-bar green" : "stats__container-bar red"}></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Kills</div>
          <div className="stats__container-value">{global_stats?.solo?.kills}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Win rate</div>
          <div className="stats__container-value">{global_stats?.solo?.winrate}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Top 25</div>
          <div className="stats__container-value">{global_stats?.solo?.placetop25}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Top 10</div>
          <div className="stats__container-value">{global_stats?.solo?.placetop10}</div>
          <div className="stats__container-bar more"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Wins</div>
          <div className="stats__container-value">{global_stats?.solo?.placetop1}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Matches played</div>
          <div className="stats__container-value">{global_stats?.solo?.matchesplayed}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Deaths</div>
          <div className="stats__container-value">{Math.round(global_stats?.solo?.kills / global_stats?.solo?.kd)}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
      </div>
    </div>

    <div className='stats__box'>
    <div className="stats__title">
      <h3>Duo</h3>
      </div>
      <div className='stats__text'>
        <div className="stats__container">
          <div className="stats__container-title">K/D</div>
          <div className="stats__container-value">{global_stats?.duo?.kd}</div>
          <div className={ global_stats?.solo?.kd > 1 ? "stats__container-bar green" : "stats__container-bar red"}></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Kills</div>
          <div className="stats__container-value">{global_stats?.duo?.kills}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Win rate</div>
          <div className="stats__container-value">{global_stats?.duo?.winrate}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Top 12</div>
          <div className="stats__container-value">{global_stats?.duo?.placetop12}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Top 5</div>
          <div className="stats__container-value">{global_stats?.duo?.placetop5}</div>
          <div className="stats__container-bar more"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Wins</div>
          <div className="stats__container-value">{global_stats?.duo?.placetop1}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Matches played</div>
          <div className="stats__container-value">{global_stats?.duo?.matchesplayed}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Deaths</div>
          <div className="stats__container-value">{Math.round(global_stats?.duo?.kills / global_stats?.duo?.kd)}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
      </div>
    </div>

    <div className='stats__box'>
    <div className="stats__title">
      <h3>Trio</h3>
      </div>
      <div className='stats__text'>
        <div className="stats__container">
          <div className="stats__container-title">K/D</div>
          <div className="stats__container-value">{global_stats?.trio?.kd}</div>
          <div className={ global_stats?.solo?.kd > 1 ? "stats__container-bar green" : "stats__container-bar red"}></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Kills</div>
          <div className="stats__container-value">{global_stats?.trio?.kills}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Win rate</div>
          <div className="stats__container-value">{global_stats?.trio?.winrate}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Top 6</div>
          <div className="stats__container-value">{global_stats?.trio?.placetop6}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Top 3</div>
          <div className="stats__container-value">{global_stats?.trio?.placetop3}</div>
          <div className="stats__container-bar more"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Wins</div>
          <div className="stats__container-value">{global_stats?.trio?.placetop1}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Matches played</div>
          <div className="stats__container-value">{global_stats?.trio?.matchesplayed}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Deaths</div>
          <div className="stats__container-value">{Math.round(global_stats?.trio?.kills / global_stats?.trio?.kd)}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
      </div>
    </div>

    <div className='stats__box'>
    <div className="stats__title">
      <h3>squad</h3>
      </div>
      <div className='stats__text'>
        <div className="stats__container">
          <div className="stats__container-title">K/D</div>
          <div className="stats__container-value">{global_stats?.squad?.kd}</div>
          <div className={ global_stats?.solo?.kd > 1 ? "stats__container-bar green" : "stats__container-bar red"}></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Kills</div>
          <div className="stats__container-value">{global_stats?.squad?.kills}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Win rate</div>
          <div className="stats__container-value">{global_stats?.squad?.winrate}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Top 6</div>
          <div className="stats__container-value">{global_stats?.squad?.placetop6}</div>
          <div className="stats__container-bar"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Top 3</div>
          <div className="stats__container-value">{global_stats?.squad?.placetop3}</div>
          <div className="stats__container-bar more"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Wins</div>
          <div className="stats__container-value">{global_stats?.squad?.placetop1}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Matches played</div>
          <div className="stats__container-value">{global_stats?.squad?.matchesplayed}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
        <div className="stats__container">
          <div className="stats__container-title">Deaths</div>
          <div className="stats__container-value">{Math.round(global_stats?.squad?.kills / global_stats?.squad?.kd)}</div>
          <div className="stats__container-bar bar--blue"></div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Stats