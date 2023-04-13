import { Title, TwitchComponent } from '@/components';
import { withLayout } from '@/components/Layout';
import { NextPage } from 'next';

const Twitch: NextPage = (): JSX.Element => {
  return (
    <>
      <Title tag="h1">Fortnite Twitch Drops</Title>
      <TwitchComponent />
    </>
  );
};

export default withLayout(Twitch);
