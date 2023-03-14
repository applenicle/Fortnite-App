import React from 'react';
import { useRouter } from 'next/router';
import { Details } from '@/components';
import axios from 'axios';

const ShopDetails = ({ data }: any) => {
  const { shop } = data;
  console.log(shop);
  // const router = useRouter();
  // const id = router.query.id;
  // const name = router.query.displayName;
  // console.log(arr);

  return (
    <div>
      ShopDetails
      {/* {shop.map((obj) => (
        <>{obj.displayName}</>
      ))} */}
      {/* {name} */}
      <br />
      {/* <img className="img" src={displayAssets[0].background} alt={obj.granted[0].id} /> */}
      {/* {id} */}
    </div>
  );
};

export default ShopDetails;

const env = process.env.NEXT_PUBLIC_FORTNITE_API_KEY;

export const getServerSideProps = async ({ query }: any) => {
  try {
    const result = await axios.get('https://fortniteapi.io/v2/shop?lang=en', {
      headers: { Authorization: env },
    });
    const data = result.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

// export const getStaticPaths = async () => {
//   return {
//     props: [
//       {
//         data: {
//           mainId: 1,
//         },
//       },
//     ],
//   };
// };

// export const getStaticProps = async () => {
// try {
//   const result = await axios.get('https://fortniteapi.io/v2/shop?lang=en', {
//     headers: { Authorization: env },
//   });
//   const data = result.data;
//   return {
//     props: {
//       data,
//     },
//   };
// } catch (error) {
//   console.log(error);
// }
// };
