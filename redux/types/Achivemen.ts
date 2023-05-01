type achievements = {
  description: string;
  id: string;
  image: string;
  internalId: string;
  name: string;
  total: number;
};

export interface Achievement {
  result: boolean;
  season: number;
  achievements: achievements[];
}
