export type set = {
  globalPlayerCount: number;
  id: string;
  name: string;
};

export type modes = {
  category: number;
  description: string;
  enabled: boolean;
  gameType: string;
  globalPlayerCount: null;
  id: string;
  image: string;
  largeTeams: boolean;
  ltmMessage: null;
  matchmakingIcon: string;
  maxTeamSize: number;
  name: string;
  priority: number;
  set: set;
  team: string;
  video: null;
};

export interface ModesType {
  lang: string;
  modes: modes[];
  region: string;
  result: boolean;
}
