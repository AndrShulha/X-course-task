import { Link } from 'react-router-dom';

import Nav from '../Nav';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__row}>
        <div className={styles.header__title}>
          <Link to="/">X-course task</Link><span> / Andriy Shulga</span>
        </div>
        <div className={styles.header__nav}>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
