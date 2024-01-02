import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useAuth = () => {
  const { login, logout, isAuthenticated, loadAuthenticationState, error, token, setAuth } =
    useContext(AuthContext);
  return {
    isAuthenticated,
    login,
    logout,
    loadAuthenticationState,
    error,
    token,
    setAuth
  };
};

export default useAuth;