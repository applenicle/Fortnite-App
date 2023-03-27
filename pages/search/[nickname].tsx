import { useRouter } from 'next/router';
import { useGetAccountIdQuery } from '@/redux/services/FortniteApi';
import { Stats } from '@/components'
import { Layout, LayoutError, LayoutLoading, LayoutNoFetch } from '@/layouts';

const PlayerId = () => {
  const router = useRouter()
  const { nickname } = router.query
  const { data: userName, error, isLoading } = useGetAccountIdQuery(nickname)

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