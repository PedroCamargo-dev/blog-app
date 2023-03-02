import { useContext } from 'react';
import { AuthContext } from '../components/features/Auth';

const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const login = (token) => {
    dispatch({ type: 'LOGIN', payload: { token } });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return {
    user: state.user,
    token: state.token,
    isAuthenticated: !!state.token,
    login,
    logout,
  };
};

export default useAuth;