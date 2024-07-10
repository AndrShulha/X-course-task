import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import CartButton from '../CartButton';
import UserProfile from '../UserProfile';
import Button from '../ui/Button';

import styles from './Nav.module.scss';

const Nav = () => {
  const { isAuthenticated, logout, dataUser } = useAuth();
  const { clearCart } = useCart();

  const signOut = () => {
    clearCart();
    logout();
  }

  if (!isAuthenticated) return null;

  if (isAuthenticated) return (
    <nav className={styles.nav}>
      <CartButton />
      <Button
        type="button"
        mods={['modeSize1', 'modColorPrime']}
        onClick={signOut}
      >
        Sign-Out
      </Button>
      <UserProfile {...dataUser} />
    </nav>
  );
};

export default Nav;
