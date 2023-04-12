import { Title, TwitchComponent } from '@/components';
import { withLayout } from '@/components/Layout';

const Twitch = () => {
  return (
    <>
      <Title tag="h1">Fortnite Twitch Drops</Title>
      <TwitchComponent />
    </>
  );
};

export default withLayout(Twitch);
