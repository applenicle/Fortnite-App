import { Title } from '@/components';
import { withLayout } from '@/layout';
import { NextPage } from 'next/types';

const ErrorPage: NextPage = (): JSX.Element => {
  return (
    <div>
      <Title tag="h1">Sorry, unexpected error</Title>
      <Title tag="h2">Try to reload page</Title>
      <Title tag="h3">We are working on fixing the problem. Be back soon</Title>
    </div>
  );
};

export default withLayout(ErrorPage);
