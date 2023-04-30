import { NextPage } from 'next';
import { withLayout } from '@/layout';
import { BattlepassSlider, Title } from '@/components';

const BattlePass: NextPage = (): JSX.Element => {
  return (
    <>
      <Title tag="h1">Battlepass</Title>
      <BattlepassSlider />
    </>
  );
};

export default withLayout(BattlePass);
