import { Title, WeaponsItem } from '@/components';
import { withLayout } from '@/components/Layout';

const Weapons = () => {
  return (
    <>
      <Title tag="h1">Weapon list</Title>
      <WeaponsItem />
    </>
  );
};

export default withLayout(Weapons);
