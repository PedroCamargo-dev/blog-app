import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from "../services/authService";
import { AuthProps } from '../../interfaces/IAuth';
import { loginSchema } from '../components/LoginForm/schema';

export const useLoginForm = ({ email, password }: AuthProps) => {
  const [error, setError] = useState();
  const [errorForm, setErrorForm] = useState({ email, password });
  const navigate = useNavigate();

  const teste = async (e: any) => {
    try {
      await loginSchema.validate({ email, password }, { abortEarly: false });
    } catch (err: any) {
      const validationErrors: any = {};
      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });
      setErrorForm(validationErrors);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/recentes");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return { error, errorForm, handleSubmit, teste };
};
