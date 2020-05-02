import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import About from '../pages/About';

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/sobre" component={About} />
    </Switch>
  </BrowserRouter>
  ); 
}
