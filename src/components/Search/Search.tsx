/* eslint-disable jsx-a11y/label-has-associated-control */

import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import Button from 'components/Button/Button';
import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement,
};

const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const text = e.currentTarget.username.value;
    if (text.trim()) {
      onSubmit(text);
      e.currentTarget.reset();
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
