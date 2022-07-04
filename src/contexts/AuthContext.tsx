import { createContext, ReactNode, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { api } from '../services/api';

type UserSignInType = {
  email?: string;
  password?: string;
};

type UserUpdateType = {
  avatarFile: File | undefined;
  user: {
    avatar?: string;
    name: string;
    email: string;
    currentPassword: string;
    newPassword: string;
  };
};

type AuthContextType = {
  user: {
    avatar: string;
    name: string;
    email: string;
    password: string;
  };

  signIn: ({ email, password }: UserSignInType) => Promise<void>;
  signOut: () => void;
  updateProfile: ({ user, avatarFile }: UserUpdateType) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [data, setData] = useState({} as any);

  async function signIn({ email, password }: UserSignInType) {
    try {
      const res = await api.post('/sessions', { email, password });
      const { userExists: user, token } = res.data;

      localStorage.setItem('@rocketMovies:user', JSON.stringify(user));
      localStorage.setItem('@rocketMovies:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
      //
    } catch (error: any) {
      if (error.response) {
        toast.error(`${error.response.data.message}`);
      } else {
        toast.error('Não foi possível entrar');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketMovies:user');
    localStorage.removeItem('@rocketMovies:token');

    setData({});
  }

  async function updateProfile({ user, avatarFile }: UserUpdateType) {
    try {
      if (avatarFile) {
        const uploadFileFromForm = new FormData();
        uploadFileFromForm.append('avatar', avatarFile);

        const res = await api.patch('users/avatar', uploadFileFromForm);
        user.avatar = res.data.avatar;
      }

      await api.put('/users', user);
      localStorage.setItem('@rocketMovies:user', JSON.stringify(user));

      setData({
        user,
        token: data.token,
      });

      toast.success('Perfil atualizado');
      //
    } catch (error: any) {
      if (error.response) {
        toast.error(`${error.response.data.message}`);
      } else {
        toast.error('Não foi atualizar o perfil');
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketMovies:user');
    const token = localStorage.getItem('@rocketMovies:token');

    if (user && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        user: JSON.parse(user),
        token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
