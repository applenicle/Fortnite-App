import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { withLayout } from '@/layout';
import { Details } from '@/components';
import { useGetDetailsShopQuery } from '@/redux/services/FortniteApi';

const ShopDetails: NextPage = (): JSX.Element => {
  const {
    locale,
    query: { id },
  } = useRouter();
  const params = [id, locale];
  const { data, isLoading } = useGetDetailsShopQuery(params);
  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <>
      {[data?.item].map((obj) => (
        <Details key={obj?.id} {...obj} />
      ))}
    </>
  );
};

export default withLayout(ShopDetails);
