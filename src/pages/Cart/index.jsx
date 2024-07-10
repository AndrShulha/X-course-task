import Button from '../../components/ui/Button';

import { useCart } from '../../context/CartContext';
import { useBooks } from '../../context/BooksContext';

import CartIcon from 'src/assets/icons/cart.svg?react';

import styles from './Cart.module.scss';
import { BOOK_LIST } from '../../shared/router-path';
import NumberFiled from '../../components/ui/NumberFiled';
import DelItemButton from '../../components/DelItemButton';

const Cart = () => {
  const { cart, clearCart, updateItemInCart } = useCart();
  const { books } = useBooks();
  return (
    <section className={styles.cart}>
      <div className={styles.cart__header}>
        <Button
          type="button"
          mods={['modeSize1', 'modColorPrime']}
          onClick={clearCart}
          disabled={!cart.length}
        >Purchase</Button>
      </div>
      <div className={styles.cart__main}>
        {
          cart.length ? (
            <>
              <h2 className={styles.cart__title}>Shoping Cart</h2>
              <div className={styles.cart__table}>
                <div className={styles.cart__table_row}>
                  <div className={styles.cart__table_name}><span className={styles.cart__table_header}>Book</span></div>
                  <div className={styles.cart__table_count}><span className={styles.cart__table_header}>Quantity</span></div>
                  <div className={styles.cart__table_price}><span className={styles.cart__table_header}>Price</span></div>
                  <div className={styles.cart__table_total}><span className={styles.cart__table_header}>Total</span></div>
                  <div className={styles.cart__table_del}></div>
                </div>
                { cart.map(item => {
                  const book = books.find(elem => elem.id === item.id);

                  return (
                    <div key={book.id} className={styles.cart__table_row}>
                      <div className={styles.cart__table_name}>
                        <span className={styles.cart__table_cell}>{book.title}</span>
                      </div>
                      <div className={styles.cart__table_count}>
                        <span className={styles.cart__table_cell}>
                        <NumberFiled
                          initValue={item.count}
                          maxValue={book.amount}
                          minValue={1}
                          onInput={(value) => {updateItemInCart({
                            id: item.id,
                            count: value
                          })}}
                        />
                        </span>
                      </div>
                      <div className={styles.cart__table_price}>
                        <span className={styles.cart__table_cell}>{book.price}</span>
                      </div>
                      <div className={styles.cart__table_total}>
                        <span className={styles.cart__table_cell}>{(book.price * item.count).toFixed(2)}</span>
                      </div>
                      <div className={styles.cart__table_del}>
                        <DelItemButton itemId={item.id} />
                      </div>
                    </div>
                  )
                })

                }
                <div className={styles.cart__total}>Total $ {
                  cart.reduce(
                    (acc, item) => {
                      const priceItem = (books.find(elem => elem.id === item.id).price * item.count).toFixed(2);
                      return Number((acc + Number(priceItem)).toFixed(2));
                    }, 0)
                }</div>
              </div>
            </>
          ) : (
            <div className={styles.cart__emty}>
              <div className={styles.cart__emty_img}>
                <CartIcon />
              </div>
              <div className={styles.cart__emty_title}>Cart emty...</div>
              <div className={styles.cart__emty_btn}>
              <Button
                to={BOOK_LIST}
                mods={['modeSize1', 'modColorPrime']}
              >Back to the book list</Button>
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default Cart;
