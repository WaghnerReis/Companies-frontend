import React, { createContext, useCallback, useContext, useState } from 'react';
import { SignInCredentials } from '../interfaces';

import api from '../services/api';

interface AuthState {
  uid: string;
  client: string;
  accessToken: string;
}

interface AuthContextData {
  error: string;
  loading: boolean;
  data: AuthState;
  signOut(): void;
  signRequest(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AuthState>(() => {
    const uid = localStorage.getItem('@companies:uid');
    const client = localStorage.getItem('@companies:client');
    const accessToken = localStorage.getItem('@companies:accessToken');

    if (uid && client && accessToken) {
      api.defaults.headers['access-token'] = accessToken;
      api.defaults.headers.client = client;
      api.defaults.headers.uid = uid;

      return {
        uid,
        client,
        accessToken,
      };
    }

    return {} as AuthState;
  });

  const signRequest = useCallback(async ({ email, password }) => {
    try {
      setError('');
      setLoading(true);

      const { headers } = await api.post('/users/auth/sign_in', {
        email,
        password,
      });

      const { uid, client } = headers;
      const accessToken = headers['access-token'];

      localStorage.setItem('@companies:uid', uid);
      localStorage.setItem('@companies:client', client);
      localStorage.setItem('@companies:accessToken', accessToken);

      api.defaults.headers['access-token'] = accessToken;
      api.defaults.headers.client = client;
      api.defaults.headers.uid = uid;

      setData({
        uid,
        client,
        accessToken,
      });
    } catch (err) {
      setError('Credenciais informadas são inválidas, tente novamente.');
    } finally {
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@companies:uid');
    localStorage.removeItem('@companies:client');
    localStorage.removeItem('@companies:accessToken');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ error, loading, data, signOut, signRequest }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}
