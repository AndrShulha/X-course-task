import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { BooksProvider } from './context/BooksContext';
import { CartProvider } from './context/CartContext';

import router from './shared/router';

const App = () => {

  return (
    <AuthProvider>
      <BooksProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </BooksProvider>
    </AuthProvider>
  )
}

export default App
