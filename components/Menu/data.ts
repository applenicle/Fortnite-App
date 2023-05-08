import { faFish, faMap, faScroll, faTags } from '@fortawesome/free-solid-svg-icons';

export const navigation = [
  {
    icon: faTags,
    label: 'Cosmetics',
    second: [
      {
        label: 'Daily Shop',
        route: '/shop',
      },
      {
        label: 'Crew Skins',
        route: '/crew',
      },
      {
        label: 'Battlepass Skins',
        route: '/battlepass',
      },
    ],
  },
  {
    icon: faScroll,
    label: 'Events',
    second: [
      {
        label: 'Twitch drops',
        route: '/twitch',
      },
      {
        label: 'News',
        route: '/',
      },
    ],
  },
  {
    icon: faMap,
    label: 'Game content',
    second: [
      {
        label: 'Game modes',
        route: '/modes',
      },
      {
        label: 'Achievements',
        route: '/achievements',
      },
    ],
  },
  {
    icon: faFish,
    label: 'List item',
    second: [
      {
        label: 'Fish',
        route: '/fish',
      },
      {
        label: 'Weapons',
        route: '/weapons',
      },
    ],
  },
];
