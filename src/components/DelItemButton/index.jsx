import { useCart } from '../../context/CartContext';

import Button from '../ui/Button';
import DeleteIcon from 'src/assets/icons/delete.svg?react';
const DelItemButton = ({ itemId }) => {
  const { removeItemFromCart } = useCart();
  return (
    <Button
      type="button"
      mods={['iconColor', 'iconSize3']}
      onClick={() => {removeItemFromCart(itemId)}}
    >
      <DeleteIcon />
    </Button>
  );
};

export default DelItemButton;
