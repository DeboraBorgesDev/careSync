import  { createContext } from 'react';
import { AuthContextType } from '.';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
