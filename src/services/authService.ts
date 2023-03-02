import Cookies from 'js-cookie';
import IAuth from '../interfaces/services/IAuth';

const TOKEN_KEY = 'accessToken';

const setAuthToken = ({ token }: IAuth) => {
  if (token) {
    Cookies.set(TOKEN_KEY, token, { secure: true });
  } else {
    Cookies.remove(TOKEN_KEY);
  }
};

const getAuthToken = () => Cookies.get(TOKEN_KEY);

export { setAuthToken, getAuthToken };