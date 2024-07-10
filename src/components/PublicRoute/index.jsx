import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { BOOK_LIST } from '../../shared/router-path';

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to={BOOK_LIST} /> : children;
};

export default PublicRoute;
