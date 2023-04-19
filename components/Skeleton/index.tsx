import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    // className="skeleton"
    width="100%"
    viewBox="0 0 20 20"
    // backgroundColor="#f3f3f3"
    // foregroundColor="#ecebeb"
    // backgroundColor={'#333'}
    // foregroundColor={'#999'}
    backgroundOpacity={0.06}
    foregroundOpacity={0.12}>
    <rect x="0" y="0" width="100%" height="100%" />
  </ContentLoader>
);

export default Skeleton;
