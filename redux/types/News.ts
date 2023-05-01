type news = {
  adspace: string;
  body: string;
  date: string;
  id: string;
  image: string;
  live: boolean;
  tabTitle: string;
  title: string;
  video: string;
};

export interface NewsType {
  lang: string;
  news: news[];
  result: boolean;
  show: number;
  type: string;
}
