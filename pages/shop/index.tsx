import { NextPage } from 'next';
import { ShopList, Title } from '@/components';
import { withLayout } from '@/layout';

const Shop: NextPage = (): JSX.Element => {
  return (
    <>
      <Title tag="h1">Daily Shop</Title>
      <ShopList />
    </>
  );
};

export default withLayout(Shop);
