import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={4}
    width={250}
    height={450}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="25" rx="0" ry="0" width="250" height="240" />
    <rect x="0" y="280" rx="0" ry="0" width="250" height="70" />
  </ContentLoader>
);

export default Skeleton;
