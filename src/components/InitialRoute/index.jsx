import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { BOOK_LIST, SIGN_IN } from '../../shared/router-path';

const InitialRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to={BOOK_LIST} /> : <Navigate to={SIGN_IN} />;
};

export default InitialRoute;
