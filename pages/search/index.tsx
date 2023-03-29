import React from 'react'
import Link from 'next/link';
import { useGetUserNameQuery } from '@/redux/services/FortniteApi';
import { Layout, LayoutError, LayoutLoading, LayoutNoFetch } from '@/layouts';
import { NextPage } from 'next';
import { useRouter } from 'next/router';


const Search: NextPage = () => {
  const [value, setValue] = React.useState('');
  const { locale } = useRouter();
  const params = [value, locale]
  const { data: idData, error, isLoading } = useGetUserNameQuery(params)
  console.log(idData)

  const ref = React.useRef(null)

  const onChange = (e:any) => {
    setValue(e.target.value)
  }
  
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
  if (!idData) {
    <LayoutNoFetch>NO DATA</LayoutNoFetch>;
  }


  return (
    <Layout>
      {[idData?.account_id].map((obj, i) => <div key={i}>
        <input ref={ref} type="text" onChange={onChange}/>
        <Link  href={`search/${obj}`}>TEST</Link>
      </div>)}

    </Layout>
  )
}

export default Search