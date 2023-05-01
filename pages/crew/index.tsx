import { Title, CrewCard } from '@/components';
import { withLayout } from '@/layout';
import { NextPage } from 'next/types';

const Challanges: NextPage = (): JSX.Element => {
  return (
    <>
      <>
        <Title tag="h1">Crew Bundles</Title>
        <CrewCard />
      </>
    </>
  );
};

export default withLayout(Challanges);
