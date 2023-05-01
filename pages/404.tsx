import { withLayout } from '@/layout';
import Link from 'next/link';
import { NextPage } from 'next/types';

const NotFound: NextPage = (): JSX.Element => {
  return (
    <div className="not__container">
      <div className="not__found">
        <div>
          <h1>404</h1>
          <h2>Something went</h2>
          <h3>Wrong!</h3>
          <Link href="/">Back to Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default withLayout(NotFound);
