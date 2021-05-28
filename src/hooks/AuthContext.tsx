import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from '../services/api';

export interface UserData {
  name?: string
  email: string;
  password?: string;
}

interface AuthState {
  token: string;
}

interface AuthContextState {
  signIn({ email, password }: UserData): Promise<void>;
  userLogged(): Promise<boolean>;
  signOut(): any;
  data: AuthState;
  loading: boolean;
  updateUser(userData: UserData): Promise<void>;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);


const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const LoadData = async () => {
      const token = await AsyncStorage.getItem('#@tgltoken@#');

      if (token) {
        setData({token: token});
        api.defaults.headers.Authorization = `Bearer ${token}`;
      }
  
      setLoading(false);
    };

    LoadData()
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    try{
      const response = await api.post('/session', {
        email: email,
        password: password
      });

      const { token } = response.data.token;
      setData({token: token})

      await AsyncStorage.setItem('#@tgltoken@#', token);

      api.defaults.headers.Authorization = `Bearer ${token}`;
    }catch(err){
      alert('Credenciais Incorretas!');
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
    // limpar o cart games (redux)**
    try{
    await AsyncStorage.removeItem('#@tgltoken@#');
    setData({} as AuthState)

    }catch(err){
      console.log('erro na hora de remover signOut')
    }
  };

  const updateUser = async ({ name, email, password }) => {
    try{
      console.log(name, email, password)
      
    await api.put('/users', {
      name: name,
      email: email,
      password: password
    });
    }catch(err){
      return alert('Erro ao atualizar perfil!');
    }
  };


  return (
    <AuthContext.Provider value={{ signIn, data, loading, userLogged, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth }