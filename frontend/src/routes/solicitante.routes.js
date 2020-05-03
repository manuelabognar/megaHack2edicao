import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProfileSolicitante from '../pages/ProfileSolicitante';
import NovaSolicitacao from '../pages/NovaSolicitacao';
//import VizualizarSolicitacao from '../pages/VizualizarSolicitacao';

export default function SolicitanteRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/solicitante" component={ProfileSolicitante} />
        <Route path="/solicitante/adicionar" component={NovaSolicitacao} />
      </Switch>
  </BrowserRouter>
  ); 
}
