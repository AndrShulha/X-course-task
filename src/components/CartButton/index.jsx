import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';

import CartIcon from 'src/assets/icons/cart.svg?react';
import {CART} from '../../shared/router-path';

import styles from './CartButton.module.scss';


const CartButton = () => {
  const { totalBooks } = useCart();
  return (
    <Button to={CART} mods={['iconSize', 'iconColor']}>
      <CartIcon />
      { totalBooks ?
        (<div className={styles.cart_button__amount}>{totalBooks}</div>)
        :
        null
      }
    </Button>
  );
};

export default CartButton;
