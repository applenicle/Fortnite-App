import { Title, AchievementCard } from '@/components';
import { withLayout } from '@/layout';
import { NextPage } from 'next';

const Achievements: NextPage = (): JSX.Element => {
  return (
    <>
      <Title tag="h1">achivements</Title>
      <AchievementCard />
    </>
  );
};

export default withLayout(Achievements);
