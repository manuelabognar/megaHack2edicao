import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import About from '../pages/About';
import Register from '../pages/Register'

export default function AuthRoutes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/sobre" component={About} />  
        <Route path="/cadastro" component={Register} />     
      </Switch>
    </BrowserRouter>
  );
}