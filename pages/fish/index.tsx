import { Title, FishCard } from '@/components';
import { withLayout } from '@/layout';
import { NextPage } from 'next';

const Fish: NextPage = (): JSX.Element => {
  return (
    <>
      <Title tag="h1">All fish</Title>
      <FishCard />
    </>
  );
};

export default withLayout(Fish);
