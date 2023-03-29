import { useRouter } from 'next/router';
import { useGetAccountIdQuery } from '@/redux/services/FortniteApi';
import { Stats } from '@/components'
import { Layout, LayoutError, LayoutLoading, LayoutNoFetch } from '@/layouts';
import { NextPage } from 'next';

const PlayerId: NextPage = () => {
  const { locale, query: {nickname} } = useRouter();
  const params = [ nickname, locale]
  const { data: userName, error, isLoading } = useGetAccountIdQuery(params)
  console.log(userName)

  // if(userName?.code === 'PRIVATE_ACCOUNT') {
  //   <div>{userName?.message}</div>
  // }
  if (isLoading) {
    return (
      <LayoutLoading>
         Skeleton
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
      {[userName].map((obj, i:number) => 
        <Stats key={i} {...obj}/>
      )}
    </Layout>
  )
}

export default PlayerId