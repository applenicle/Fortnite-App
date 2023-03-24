import { Layout } from '@/components';
import Details from '@/components/Details';
import React from 'react';

export const getServerSideProps = async (context: any) => {
  let id = context.params.id;
  const res = await fetch(`https://fortniteapi.io/v2/items/get?id=${id}&lang=en`, {
    headers: {
      Authorization: `${process.env.NEXT_PUBLIC_FORTNITE_API_KEY}`,
    },
  });
  const data = await res.json();
  return {
    props: {
      item: data.item,
    },
  };
};

const ShopDetails = ({ item }: any) => {
  console.log(item);
  return (
    <Layout>
      {[item].map((obj: any) => (
        <Details key={obj.id} {...obj} />
      ))}
    </Layout>
  );
};

export default ShopDetails;
