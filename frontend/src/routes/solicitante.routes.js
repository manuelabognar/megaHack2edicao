import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProfileSolicitante from '../pages/ProfileSolicitante';
import NovaSolicitacao from '../pages/NovaSolicitacao';
import VisualizarSolicitacao from '../pages/VisualizarSolicitacao';

export default function SolicitanteRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/solicitante" exact component={ProfileSolicitante} />
        <Route path="/solicitante/adicionar" component={NovaSolicitacao} />
        <Route path="/solicitante/visualizar" component={VisualizarSolicitacao} />
      </Switch>
  </BrowserRouter>
  ); 
}
