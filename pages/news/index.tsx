import { NewsComponent, Title } from '@/components';
import { NextPage } from 'next';
import { withLayout } from '@/components/Layout';

const News: NextPage = (): JSX.Element => {
  return (
    <>
      <Title tag="h1">Game news</Title>
      <NewsComponent />
    </>
  );
};

export default withLayout(News);
