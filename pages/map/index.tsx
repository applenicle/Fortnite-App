import axios from 'axios';
import React from 'react';
const env = process.env.NEXT_PUBLIC_FORTNITE_API_KEY;

const Map = () => {
  const [data, setData] = React.useState([]);
  const fetchData = async (url: string) => {
    await axios
      .get(url, {
        headers: { Authorization: env },
      })
      .then(({ data }: any) => {
        console.log(data.maps);
        setData(data.maps);
      });
  };

  React.useEffect(() => {
    fetchData('https://fortniteapi.io/v1/maps/list');
    return () => {};
  }, []);
  return (
    <div>
      {/* {data.map((obj) => (
        <div key={obj.urlPOI}>
          <img src={obj.url} alt="" />
        </div>
      ))} */}
    </div>
  );
};

export default Map;
