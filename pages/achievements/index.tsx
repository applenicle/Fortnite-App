import { Layout } from '@/components';
import axios from 'axios';
import React from 'react'

const Achievements = () => {
  const [data, setData] = React.useState([])
  const fetchData = (url: string) => {
    axios
      .get(url, {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_FORTNITE_API_KEY,
        },
      })
      .then((res: any) => {
        setData(res.data.achievements);
      });
  };

  React.useEffect(() => {
    fetchData(`https://fortniteapi.io/v1/achievements?lang=en`)
  }, []);
  console.log(data);
 

  return (
    <Layout>
      <h2 className='achivements__title'>achivements</h2>
      <div className="achivements__inner">
        {data.map((obj:any) => <div key={obj?.id}>
          <div className="achivements__box">
            <div className="achivements--bar"><span></span></div>
            <div className="achivements__content">
              <div className="achivements__image">
                <img src={obj.image} alt={obj?.internalId} />
              </div>
              <div className="achivements__text">
                <h3>{obj?.name}</h3>
                <p>{obj?.description}</p>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </Layout>
  )
}

export default Achievements