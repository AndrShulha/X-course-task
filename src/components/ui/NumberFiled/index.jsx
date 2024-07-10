import { useState, useEffect, useRef } from 'react';

import Button from '../Button';

import PlusIcon from 'src/assets/icons/plus.svg?react';
import MinusIcon from 'src/assets/icons/minus.svg?react';

import styles from './NumberFiled.module.scss';


const NumberFiled = ({
  initValue = 1,
  minValue = initValue,
  maxValue = minValue + 100,
  onInput = () => {}
}) => {
  const [number, setNumber] = useState(initValue);
  const inputRef = useRef(null);

  useEffect(() => {
    onInput(number)
  }, [number])


  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value <= maxValue && value >= minValue) {
      setNumber(Number(value));
    }
  };

  const numberIncrement = () => {
    setNumber((prev) => {
      const newValue = prev + 1;
      return newValue <= maxValue ? newValue : prev;
    });
  };

  const numberDecrement = () => {
    setNumber((prev) => {
      const newValue = prev - 1;
      return newValue >= minValue ? newValue : prev;
    });
  };

  return (
    <div className={styles.number}>
    <Button
      type="button"
      mods={['iconColor', 'iconSize3']}
      onClick={numberIncrement}
      disabled={Boolean(number >= maxValue)}
      data-testid="buttonIncrement"
    >
      <PlusIcon />
    </Button>
    <input
      type="text"
      className={styles.number__input}
      value={number}
      onChange={handleChange}
      onFocus={(e) => { e.target.select() }}
      ref={inputRef}
    />
    <Button
      type="button"
      mods={['iconColor', 'iconSize3']}
      onClick={numberDecrement}
      disabled={Boolean(number <= minValue)}
      data-testid="buttonDecrement"
    >
      <MinusIcon />
    </Button>
    </div>
  );
};

export default NumberFiled;
