import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import s from './Searchbar.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchBar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchValue.trim() === '') {
      toast.error('Вы ничего не ищете ;)');
      return;
    }

    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchValue"
          value={searchValue}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
