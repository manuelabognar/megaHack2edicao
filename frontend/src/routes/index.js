import React from 'react';

import {useAuth} from '../contexts/auth';

import AuthRoutes from './auth.routes';

import CartorioRoutes from './cartorio.routes';
import SolicitanteRoutes from './solicitante.routes';

function Routes() {
  const {signed, user} = useAuth();

  console.log(user);

  return signed ? <SolicitanteRoutes /> : <AuthRoutes />;
}

export default Routes;
