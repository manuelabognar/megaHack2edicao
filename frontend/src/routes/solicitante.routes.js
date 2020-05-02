import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProfileSolicitante from '../pages/ProfileSolicitante';
import About from '../pages/About';

export default function SolicitanteRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sobre" component={About} />
        <Route path="/" component={ProfileSolicitante} />
      </Switch>
  </BrowserRouter>
  ); 
}
