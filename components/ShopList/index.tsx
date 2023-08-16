import Link from 'next/link';
import styles from './ShopList.module.scss';
import { useRouter } from 'next/router';
import { useGetAllShopQuery } from '@/redux/services/FortniteApi';
import Title from '../Title';
import Timer from '../Timer';
import Skeleton from '../Skeleton';
import vbucks from '@/public/vbucks.png';
import { shop } from '@/redux/types/Shop';
import Image from 'next/image';

type arr = {
  id: string;
  data: any;
};

const ShopList = () => {
  const { locale } = useRouter();
  const { data, isLoading } = useGetAllShopQuery(locale);
  const skeleton = [...new Array(20)].map((_: any, i: number) => <Skeleton key={i} />);
  if (isLoading) {
    return <div className={styles.list}>{skeleton}</div>;
  }
  const dataShop = data?.shop;
  let obj: any = {};
  let arr: arr[] = [];
  [...new Set(dataShop?.map((obj) => obj?.section?.id))].map((item) => (obj[item] = []));
  dataShop?.map((item) => {
    obj[item?.section?.id]?.push({ ...item });
  });

  Object.entries(obj).map(([id, data]) => {
    arr.push({ id, data });
  });

  return (
    <>
      <Timer DailyTimer={data?.currentRotation?.Daily} />
      {arr.map(({ data, id }) => (
        <div key={id}>
          <Title tag="h2">{data[0]?.section?.name}</Title>
          <ul className={styles.list}>
            {data?.map((obj: shop) => (
              <li className={styles.item} key={obj.offerId}>
                <Link className={styles.link} href={`shop/${obj.mainId}`}>
                  <Image
                    src={obj.displayAssets[0]?.background}
                    alt={obj.mainId}
                    height={500}
                    width={500}
                    style={{ height: 'auto', width: '100%' }}
                    className={styles.img}
                  />
                </Link>
                <div className={styles.content}>
                  <div>
                    <h4 className={styles.name}>{obj.displayName}</h4>
                    <p className={styles.type}>{obj.granted[0].type.name}</p>
                  </div>
                  <div className={styles.price}>
                    <Image src={vbucks.src} alt="vbucks" height={30} width={30} />
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
