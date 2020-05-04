import React from 'react';

import AuthRoutes from './auth.routes';
import {useAuth} from '../contexts/auth';

import AuthSolicitante from '../contexts/authSolicitante';
import AuthCartorio from '../contexts/authCartorio';

import CartorioRoutes from './cartorio.routes';
import SolicitanteRoutes from './solicitante.routes';

function Routes() {
  const { signed } = useAuth();

  if (AuthSolicitante.getAuth() === true)
    return <SolicitanteRoutes />;

  if (AuthCartorio.getAuth() === true)
    return <CartorioRoutes />;

  return <AuthRoutes />
}

export default Routes;
