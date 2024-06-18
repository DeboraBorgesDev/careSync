import React, {useState, useEffect, ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login, User } from '../../services/login/types';
import { apiLogin, validateToken } from '../../services/login';
import AuthContext from './authContext';
import { toast } from 'react-toastify';

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
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('token');

    const checkTokenValidity = async () => {
      try {
        if (savedUser && savedToken) {
          const isValid = await validateToken(savedToken);
          if (isValid) {
            setUser(JSON.parse(savedUser));
            setToken(savedToken);
          } else {
            logout();
            navigate('/login');
          }
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error during token validation:', error);
        //@ts-ignore
        toast.error(error.response.data);
        
        logout();
        navigate('/login');
      }
    };

    checkTokenValidity();
  }, [navigate]);

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
    navigate('/login');
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