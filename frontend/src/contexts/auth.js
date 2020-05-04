import React, {createContext, useState, useEffect, useContext} from 'react';
import api from '../services/api';
import * as auth from '../services/auth';
import AuthSolicitante from './authSolicitante';
import AuthCartorio from './authCartorio';

import AuthSolicitante from './authSolicitante';
import AuthCartorio from './authCartorio';

const AuthContext = createContext();

export function AuthProvider({ children }){

  const [user, setUser] = useState('');

  useEffect(() => {
    async function loadStorageData () { 
      const storageUser = localStorage.getItem('@RNAuth:user');
      const storageToken = localStorage.getItem('@RNAuth:token');

      if (storageUser && storageToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
      }
    }

    loadStorageData();
  }, []);


  async function signInSolicitante() {

    AuthSolicitante.authenticate();

    const response = await auth.signInSolicitante();

    setUser(response.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    await localStorage.setItem('@MegaHack:user', JSON.stringify(response.user));
    await localStorage.setItem('@Auth:token', response.token);
  }

  async function signInCartorio() {

    AuthCartorio.authenticate();

    const response = await auth.signInCartorio();

    setUser(response.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    await localStorage.setItem('@MegaHack:user', JSON.stringify(response.user));
    await localStorage.setItem('@Auth:token', response.token);
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    AuthSolicitante.signout();
    AuthCartorio.signout();
  }

  return (
    <AuthContext.Provider value={{ signed:!!user, user, signInSolicitante, signInCartorio, signOut }}>
      { children }
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}