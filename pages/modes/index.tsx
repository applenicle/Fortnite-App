import { GameModes, Title } from '@/components';
import { withLayout } from '@/components/Layout';
import { NextPage } from 'next';

const Modes: NextPage = (): JSX.Element => {
  return (
    <>
      <Title tag="h1">Game modes</Title>
      <GameModes />
    </>
  );
};

export default withLayout(Modes);
