import { createContext } from "react";
import { PropsAuth } from './authReducer';

  
  const AuthContext = createContext<PropsAuth | null>(null);


  export default AuthContext;