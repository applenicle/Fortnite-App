import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import { useState, KeyboardEvent, useRef } from 'react';
import { useRouter } from 'next/router';
import Button from '../Button';
import { useGetUserNameQuery } from '@/redux/services/FortniteApi';
import { useDebounce } from '@/hooks/useDebounce';

const Search = (): JSX.Element => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);
  const params = [searchText, router.locale];
  const { data } = useGetUserNameQuery(params);
  useDebounce(searchText, 1000);
  const goToSearch = (e: any, value: string) => {
    e.preventDefault();
    router.push({
      pathname: `/search/${value}`,
    });
  };
  const handleKeyDown = (e: KeyboardEvent, value: string) => {
    if (e.key == 'Enter') {
      goToSearch(e, value);
    }
  };

  return (
    <>
      {[data?.account_id].map((obj: any, i: number) => (
        <form key={i} onSubmit={(e) => goToSearch(e, obj)} className={styles.search} role="search">
          <input
            ref={ref}
            value={searchText}
            placeholder="Enter your fortnite name..."
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, obj)}
          />
          <Button appearance="active">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </form>
      ))}
    </>
  );
};

export default Search;
