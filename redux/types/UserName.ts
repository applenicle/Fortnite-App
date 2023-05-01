type account = {
  level: number;
  process_pct: number;
  season: number;
};

type accountLevelHistory = account[] & {};

type solo = {
  kd: number;
  kills: number;
  lastmodified: number;
  matchesplayed: number;
  minutesplayed: number;
  placetop1: number;
  placetop3: number;
  placetop5: number;
  placetop6: number;
  placetop10: number;
  placetop12: number;
  placetop25: number;
  playersoutlived: number;
  score: number;
  winrate: number;
};

type duo = solo & {};
type trio = solo & {};
type squad = solo & {};

type global_stats = {
  solo: solo;
  duo: duo;
  trio: trio;
  squad: squad;
};

type perInput = {
  gamepad: global_stats;
  keyboardmouse: global_stats;
};

export interface UserName {
  account: account;
  accountLevelHistory: accountLevelHistory;
  global_stats: global_stats;
  name: string;
  per_input: perInput;
  result: boolean;
  seasons_available: number[];
}
