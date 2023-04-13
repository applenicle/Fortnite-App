import { Title, WeaponsItem } from '@/components';
import { withLayout } from '@/components/Layout';
import { NextPage } from 'next';

const Weapons: NextPage = (): JSX.Element => {
  return (
    <>
      <Title tag="h1">Weapon list</Title>
      <WeaponsItem />
    </>
  );
};

export default withLayout(Weapons);
