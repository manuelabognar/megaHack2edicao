import React from 'react';

import {useAuth} from '../contexts/auth';
import AuthRoutes from './auth.routes';
import AuthSolicitante from '../contexts/authSolicitante';
import AuthCartorio from '../contexts/authCartorio';

import CartorioRoutes from './cartorio.routes';
import SolicitanteRoutes from './solicitante.routes';

function Routes() {
  const {signed} = useAuth();

  if (AuthCartorio.getAuth() === true)
    return <CartorioRoutes />

  if (AuthSolicitante.getAuth() === true)
    return <SolicitanteRoutes />

  return <AuthRoutes />;
}

export default Routes;
