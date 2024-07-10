import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={styles.not_found}>
      <div className={styles.not_found__title}>
        Хм, схоже, ця сторінка зникла. Повернутись на <Link to='/'>головну сторінку.</Link>
      </div>
    </section>
  );
};

export default NotFound;
