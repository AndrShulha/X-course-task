import { createContext, useContext, useEffect, useState } from 'react';

import { useBooks } from '../BooksContext';

// cart = [
//   {
//     id: Number,
//     count: Number,
//   }
// ]

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const initialCartState = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const countTotalBooks = (cart) => cart.reduce((acc, book) => acc + book.count, 0);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCartState);
  const [totalBooks, setTotalBooks] = useState(countTotalBooks(cart));
  const { books } = useBooks();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setTotalBooks(countTotalBooks(cart));
  }, [cart]);

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        const amountBooks = books.filter(book => book.id === item.id)[0].amount;
        const updatedCart = [...prevCart];
        const countBooks = updatedCart[existingItemIndex].count + item.count;
        updatedCart[existingItemIndex].count = countBooks <= amountBooks ? countBooks : amountBooks;

        return updatedCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeItemFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateItemInCart = (updatedItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === updatedItem.id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = updatedItem;
        return updatedCart;
      } else {
        return prevCart;
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, totalBooks, addItemToCart, removeItemFromCart, clearCart, updateItemInCart }}>
      {children}
    </CartContext.Provider>
  );
};
