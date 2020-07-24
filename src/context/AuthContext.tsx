import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  user: Record<string, unknown>;
  token: string;
}

interface AuthContextData {
  user: Record<string, unknown>;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>(
    (): AuthState => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');

      if (token && user) return { user: JSON.parse(user), token };

      return {} as AuthState;
    },
  );

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<AuthState>('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    setAuthData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
