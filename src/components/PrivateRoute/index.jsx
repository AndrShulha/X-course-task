import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { SIGN_IN } from '../../shared/router-path';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to={SIGN_IN} />;
};

export default PrivateRoute;
