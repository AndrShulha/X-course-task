import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const initialUserData = {
  userName: '',
  avatarUrl: '',
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dataUser, setDataUser] = useState(initialUserData);

  useEffect(() => {
    const storedAuthState = localStorage.getItem('isAuthenticated');
    const storedUserData = localStorage.getItem('dataUser');

    if (storedAuthState === 'true' && storedUserData) {
      setIsAuthenticated(true);
      setDataUser(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    if (dataUser.userName) {
      localStorage.setItem('dataUser', JSON.stringify(dataUser));
    }
  }, [dataUser])

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setDataUser(initialUserData);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('dataUser');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, dataUser, setDataUser}}>
      {children}
    </AuthContext.Provider>
  );
};
