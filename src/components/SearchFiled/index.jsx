import { useState } from 'react';

import Button from '../ui/Button';

import SearchIcon from 'src/assets/icons/search.svg?react';

import styles from './SearchFiled.module.scss';

const SearchFiled = ({onInput}) => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.search__input}
        value={value}
        onChange={(event) => {setValue(event.target.value)}}
        onKeyDown={() => {onInput(value)}}
      />
      <Button
        type="button"
        mods={['iconSize2', 'iconColor']}
        onClick={() => {onInput(value)}}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchFiled;
