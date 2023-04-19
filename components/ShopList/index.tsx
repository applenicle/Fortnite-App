import Link from 'next/link';
import styles from './ShopList.module.scss';
import { useRouter } from 'next/router';
import { useGetAllShopQuery } from '@/redux/services/FortniteApi';
import Title from '../Title';
import Timer from '../Timer';
import Skeleton from '../Skeleton';

const ShopList = () => {
  const { locale } = useRouter();
  const { data: allShop, error, isLoading } = useGetAllShopQuery(locale);

  const skeleton = [...new Array(20)].map((_: any, i: number) => <Skeleton key={i} />);
  if (isLoading) {
    return <div className={styles.list}>{skeleton}</div>;
  }
  if (error) {
    return <>ERROR TRY RELOAD PAGE</>;
  }
  if (!allShop) {
    return <>NO DATA</>;
  }

  const dataShop = allShop?.shop;
  let obj: any = {};
  let arr: any = [];
  const sortedID = [...new Set(dataShop?.map((obj: any) => obj?.section?.id))].map(
    (item) => (obj[item] = []),
  );
  dataShop?.map((item: any) => {
    obj[item?.section?.id]?.push({ ...item });
  });

  Object.entries(obj).map(([id, data]) => {
    arr.push({ id, data });
  });

  return (
    <>
      <Timer DailyTimer={allShop?.currentRotation?.Daily} />
      {arr.map(({ data, id }) => (
        <div key={id}>
          <Title tag="h2">{data[0]?.section?.name}</Title>
          <ul className={styles.list}>
            {data?.map((obj) => (
              <li className={styles.item} key={obj.offerId}>
                <Link className={styles.link} href={`shop/${obj.mainId}`}>
                  <img
                    className={styles.img}
                    src={
                      obj.displayAssets[0]?.background
                      // obj.displayName.toLowerCase().includes(' bundle') ||
                      // obj.displayName.toLowerCase().includes(' wear')
                      // ? obj.displayAssets[0]?.background
                      // : obj.granted[0]?.images?.background
                    }
                    alt={obj.mainId}
                  />
                </Link>
                <div className={styles.content}>
                  <div>
                    <h4 className={styles.name}>{obj.displayName}</h4>
                    <p className={styles.type}>{obj.granted[0].type.name}</p>
                  </div>
                  <div className={styles.price}>
                    <img src="https://fortnite-api.com/images/vbuck.png" alt="vbucks" />
                    <span>{obj.price?.finalPrice}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ShopList;
