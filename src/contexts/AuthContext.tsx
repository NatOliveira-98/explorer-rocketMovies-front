import { createContext, ReactNode, useState } from 'react';
import toast from 'react-hot-toast';

import { api } from '../services/api';

type UserParamsType = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: {
    avatar: string;
    name: string;
    email: string;
    password: string;
  };
  signIn: ({ email, password }: UserParamsType) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [data, setData] = useState({} as any);

  async function signIn({ email, password }: UserParamsType) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { userExists, token } = response.data;

      console.log(response);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ userExists, token });
      //
    } catch (error: any) {
      if (error.response) {
        toast.error(`${error.response.data.message}`);
      } else {
        toast.error('Não foi possível entrar');
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: data.userExists,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
