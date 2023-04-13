import { Title, AchivementCard } from '@/components';
import { withLayout } from '@/components/Layout';
import { NextPage } from 'next';

const Achievements: NextPage = (): JSX.Element => {
  return (
    <>
      <Title tag="h1">achivements</Title>
      <AchivementCard />
    </>
  );
};

export default withLayout(Achievements);
