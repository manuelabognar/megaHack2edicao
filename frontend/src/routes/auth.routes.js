import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from '../pages/About';

import loginCartorio from '../pages/LoginCartorio';
import RegisterCartorio from '../pages/RegisterCartorio';

import loginSolicitante from '../pages/LoginSolicitante';
import RegisterSolicitante from '../pages/RegisterSolicitante';

export default function AuthRoutes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={About} />  

        <Route path="/cartorio" exact component={loginCartorio} />
        <Route path="/cartorio/cadastro" component={RegisterCartorio} /> 
        
        <Route path="/solicitante" exact component={loginSolicitante} /> 
        <Route path="/solicitante/cadastro" component={RegisterSolicitante} />  

      </Switch>
    </BrowserRouter>
  );
}