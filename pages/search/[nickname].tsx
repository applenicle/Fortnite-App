import { NextPage } from 'next';
import { withLayout } from '@/layout';
import { Stats } from '@/components';
import { useRouter } from 'next/router';
import { useGetAccountIdQuery } from '@/redux/services/FortniteApi';

const PlayerId: NextPage = (): JSX.Element => {
  const {
    locale,
    query: { nickname },
  } = useRouter();
  console.log(nickname);
  const params = [nickname, locale];
  const { data, isLoading } = useGetAccountIdQuery(params);
  console.log(data);
  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      {[data].map((obj, i: number) => (
        <Stats key={i} {...obj} />
      ))}
    </>
  );
};

export default withLayout(PlayerId);
