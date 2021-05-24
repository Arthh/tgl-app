import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from '../services/api';
import Api from '../services/api';



export interface UserData {
  name?: string
  email: string;
  password?: string;
}

interface AuthContextState {
  signIn({ email, password }: UserData): Promise<void>;
  userLogged(): Promise<boolean>;
  signOut(): any;
  updateUser(userData: UserData): Promise<void>;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  
  useEffect(() => {
    const LoadData = async () => {
      const token = await AsyncStorage.getItem('#@tgltoken@#');

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        return { token };
      }
  
      return null;
    };

    LoadData()
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    try{
      const response = await Api.post('/session', {
        email: email,
        password: password
      });

      const { token } = response.data.token;

      await AsyncStorage.setItem('#@tgltoken@#', token);

      api.defaults.headers.Authorization = `Bearer ${token}`;
    }catch(err){
     console.log(err.message);   
    }
  },[]);

  const userLogged = async () => {
      const token = await AsyncStorage.getItem('#@tgltoken@#');

      if(token){

        return true;
      }

      return false;
  };

  const signOut = async () => {
    try{
    await AsyncStorage.removeItem('#@tgltoken@#');

    }catch(err){
      console.log('erro na hora de remover signOut')
    }
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
    <AuthContext.Provider value={{ signIn, userLogged, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth }