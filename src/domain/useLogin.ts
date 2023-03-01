import { useCallback } from 'react';
import { login } from '../data/auth';

export function useLogin() {
  const makeLogin = useCallback(async (email: any, password: any) => {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    const response = await login(email, password);
    localStorage.setItem('token', response.data.token);
  }, []);

  return makeLogin;
};