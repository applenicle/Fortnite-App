import Link from 'next/link';
import React from 'react';

const ShopList = ({ data }: any) => {
  // const [dataTimer, setDataTimer] = React.useState(0);
  React.useEffect(() => {
    // const timerId = setInterval(() => {
    // setDataTimer((count: any) => count + 1);
    // console.log(dataTimer);
    // }, 3000);
    // return () => clearInterval(timerId);
  }, []);
  // console.log(data.displayAssets.displayAsset);
  // console.log(data.displayName);
  // const img = data.map((obj) => console.log(obj.displayAssets[0].background));
  // const map = data?.displayAssets?.map((obj: any) => console.log(obj));
  // console.log(data);
  // console.log([data.displayAssets[0]]);
  // const img = [];

  // data.map((item) => {
  // console.log(item.displayAssets.length);

  // const imageURL = item[item.displayAssets.length];
  // });
  // const imgArr = [data[0].displayAssets[0]];

  // // data[0].displayAssets;

  // const image = imgArr[dataTimer % imgArr.length];
  // console.log(image);
  // const imageURL = image[dataTimer % image.length];
  // console.log(imageURL);

  return (
    <>
      {data?.map((obj: any) => (
        <li key={obj.mainId}>
          <h1>{obj[0]?.section?.name}</h1>
          <Link href={`shop/${obj.displayName}`}>
            <img className="img" src={obj.displayAssets[0].background} alt={obj.mainId} />
          </Link>
          <div>
            {obj.price.finalPrice}
            <img className="vbucks" src="https://fortnite-api.com/images/vbuck.png" alt="vbucks" />
            {obj.displayName}
          </div>
        </li>
      ))}
    </>
  );
};

export default ShopList;
