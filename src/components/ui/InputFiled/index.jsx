import styles from './InputFiled.module.scss';

const InputFiled = ({ label, mods=[], ...restProps }) => {
  const classNames = [styles.filed, ...mods.map(mod => styles[`filed--${mod}`])].join(' ');
  return (
    <label  className={classNames}>
      <span className={styles.filed__text}>{label}</span>
      <input type="text" className={styles.filed__input} {...restProps}/>
    </label>
  );
};

export default InputFiled;
