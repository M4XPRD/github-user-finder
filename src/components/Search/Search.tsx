/* eslint-disable jsx-a11y/label-has-associated-control */

import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { ReactElement, useRef } from 'react';
import Button from 'components/Button/Button';
import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = searchRef.current ? searchRef.current.value : '';

    if (text) {
      onSubmit(text);
      if (searchRef.current) {
        searchRef.current.value = '';
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          className={styles.textField}
          ref={searchRef}
          type="text"
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default Search;
