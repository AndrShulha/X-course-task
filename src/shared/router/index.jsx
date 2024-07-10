import { createHashRouter } from 'react-router-dom';

import Cart from '../../pages/Cart';
import BookList from '../../pages/BookList';
import SignIn from '../../pages/SignIn';
import SpecificBook from '../../pages/SpecificBook';
import LayoutMain from '../../layout/LayoutMain';
import NotFound from '../../pages/NotFound';
import PrivateRoute from '../../components/PrivateRoute';
import PublicRoute from '../../components/PublicRoute';
import InitialRoute from '../../components/InitialRoute';

import { BOOK_LIST, CART, SIGN_IN, SPECIFIC_BOOK } from '../router-path';

const router = createHashRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <InitialRoute />,
      },
      {
        path: SIGN_IN,
        element: (
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        ),
      },
      {
        path: BOOK_LIST,
        element: (
          <PrivateRoute>
            <BookList />
          </PrivateRoute>
        ),
      },
      {
        path: `${SPECIFIC_BOOK}/:id`,
        element: (
          <PrivateRoute>
            <SpecificBook />
          </PrivateRoute>
        ),
      },
      {
        path: CART,
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
