import Button from '../ui/Button';

import { SPECIFIC_BOOK } from 'src/shared/router-path';
import { truncateTitle } from 'src/utils';

import styles from './BookCard.module.scss';

const BookCard = ({
  id,
  author,
  price,
  image,
  title
}) => {
  const src = image || 'imageNotFound.png';
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={src} alt={title} className={styles.card__pic} />
      </div>
      <div className={styles.card__title}>{truncateTitle(title)}</div>
      <div className={styles.card__author}>{author}</div>
      <div className={styles.card__footer}>
        <div className={styles.card__price}>{`${price} $`}</div>
        <div className={styles.card__button_wrap}>
          <Button to={`${SPECIFIC_BOOK}/${id}`} mods={['modeSize1', 'modColorPrime']}>View</Button>
        </div>

      </div>
    </div>
  );
};

export default BookCard;
