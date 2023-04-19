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
        route: '/news',
      },
      {
        label: 'Achievements',
        route: '/achievements',
      },
    ],
  },
  {
    icon: faMap,
    label: 'Game content',
    second: [
      {
        label: 'Map',
        route: '/map',
      },
      {
        label: 'Game modes',
        route: '/modes',
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
