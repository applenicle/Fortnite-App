import React from 'react';
import { useRouter } from 'next/router';
import { useGetDetailsShopQuery } from '@/redux/services/FortniteApi';
import { Details } from '@/components';
import { Layout, LayoutError, LayoutLoading, LayoutNoFetch } from '@/layouts';


const ShopDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: details, error, isLoading } = useGetDetailsShopQuery(id)

  if (isLoading) {
    return (
      <LayoutLoading>
        <div className="shop__list">Skeleton</div>;
      </LayoutLoading>
    );
  }
  if (error) {
    <LayoutError>ERROR TRY TO REFRESH PAGE</LayoutError>;
  }
  if (!details) {
    <LayoutNoFetch>NO DATA</LayoutNoFetch>;
  }

  return (
    <Layout>
      {[details?.item].map((obj: any) => (
        <Details key={obj.id} {...obj} />
      ))}
    </Layout>
  );
};

export default ShopDetails;
