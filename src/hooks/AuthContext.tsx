import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

export interface UserData {
  name?: string
  email: string;
  password?: string;
}

interface AuthContextState {
  name: string;
  token: string;
  signIn({ email, password }: UserData): Promise<void>;
  userLogged(): boolean;
  signOut(): void;
  updateUser(userData: UserData): Promise<void>;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    const LoadData = async () => {
      const token = await AsyncStorage.getItem('#@tgltoken@#');
  
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
  
        return { token };
      }
  
      return '';
    };

    LoadData()
  }, [])

  const signIn = async ({ email, password }: UserData) => {
    try{
    const response = await api.post('/sessions ', {
      email,
      password,
    });
    const { token } = response.data.token;
    const { name } = response.data.user;
    setName(name);
    setToken(token);

    AsyncStorage.setItem('#@tgltoken@#', token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    }catch(err){
     console.log(err.response)   
    }
  };

  const userLogged = useCallback(() => {
    const token = localStorage.AsyncStorage('#@tgltoken@#');

    if (token) {
      return true;
    }
    return false;
  }, []);

  const signOut = () => {
    localStorage.removeItem('#@tgltoken@#');
    setToken('');
  };

  const updateUser = async (userData: UserData) => {
    try{
    await api.put('/users ', {
      name: userData.name,
      email: userData.email,
      password: userData.password
    });
    }catch(err){
      return alert('Erro ao atualizar perfil!');
    }
  };


  return (
    <AuthContext.Provider value={{ name, token, signIn, userLogged, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth }