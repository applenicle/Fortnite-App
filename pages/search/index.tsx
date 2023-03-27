import React from 'react'
import Link from 'next/link';
import { useGetUserNameQuery } from '@/redux/services/FortniteApi';
import { Layout, LayoutError, LayoutLoading, LayoutNoFetch } from '@/layouts';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { data: userName, error, isLoading } = useGetUserNameQuery(value)

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
  if (!userName) {
    <LayoutNoFetch>NO DATA</LayoutNoFetch>;
  }


  return (
    <Layout>
      {[userName?.account_id].map((obj, i) => <div key={i}>
        <input ref={ref} type="text" onChange={onChange}/>
        <Link  href={`search/${obj}`}>TEST</Link>
      </div>)}

    </Layout>
  )
}

export default Search