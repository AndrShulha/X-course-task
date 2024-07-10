import { useParams } from 'react-router-dom';

import { useBooks } from '../../context/BooksContext';
import { useCart } from '../../context/CartContext';

import styles from './SpecificBook.module.scss';
import Button from '../../components/ui/Button';
import NumberFiled from '../../components/ui/NumberFiled';
import { useState } from 'react';

const initCount = 1;
const SpecificBook = () => {
  const { id } = useParams();
  const { books } = useBooks();
  const book = books.find((book) => book.id === Number(id));
  const [count, setCount] = useState(initCount);
  const { addItemToCart } = useCart();

  return (
    <section className={styles.book}>
      <div className={styles.book__row}>
        <div className={styles.book__img}>
          <img
            src={book.image || './imageNotFound.png'}
            alt={book.image ? book.title : 'image Not Found'}
            className={styles.book__pic}
          />
        </div>
        <div className={styles.book__info}>
          <div className={styles.book__title}>{book.title}</div>
          <div className={styles.book__author}>{book.author}</div>
          <div className={styles.book__text}>{book.shortDescription}</div>
        </div>
        <div className={styles.book__order}>
          <div className={styles.book__order_row}>
            <span className={styles.book__order_col}>Price, $</span>
            <span className={styles.book__order_col}>{book.price}</span>
          </div>
          <div className={styles.book__order_row}>
            <span className={styles.book__order_col}>Count</span>
            <div className={styles.book__order_col}>
              <NumberFiled
                initValue={initCount}
                maxValue={book.amount}
                onInput={(value) => {setCount(value)}}
              />
            </div>
          </div>
          <div className={styles.book__order_row}>
            <span className={styles.book__order_col}>Total Price, $</span>
            <span data-testid="total" className={styles.book__order_col}>{(count * book.price).toFixed(2)}</span></div>
          <div className={styles.book__button_wrap}>
            <Button
              type="button"
              mods={['modeSize1', 'modColorPrime']}
              onClick={() => {addItemToCart({
                id: book.id,
                count
              })}}
            >Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className={styles.book__descr}>{book.description}</div>
    </section>
  );
};

export default SpecificBook;
