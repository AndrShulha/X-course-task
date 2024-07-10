import styles from './Filter.module.scss';

const Filter = ({ onInput}) => {
  return (
    <select
      onChange={(event) => {onInput(event.target.value)}}
      className={styles.filter}
    >
      <option value="all">All</option>
      <option value="0-15">{'0 < price < 15'}</option>
      <option value="15-30">{'15 < price < 30'}</option>
      <option value="30+">{'price > 30'}</option>
    </select>
  );
};

export default Filter;
