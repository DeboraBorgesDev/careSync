import React, { useContext, useState, useEffect, ReactNode } from 'react';
import { Login, User } from '../../services/login/types';
import { apiLogin } from '../../services/login';
import AuthContext from './authContext';

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (credentials: Login) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('token');
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  const login = async (credentials: Login) => {
    try {
      const user = await apiLogin(credentials);
      setUser(user);
      setToken(user.token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', user.token);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};