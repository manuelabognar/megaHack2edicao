import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProfileCartorio from '../pages/ProfileCartorio';
import About from '../pages/About';

export default function CartorioRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sobre" component={About} />
        <Route path="/cartorio" component={ProfileCartorio} />
      </Switch>
  </BrowserRouter>
  ); 
}
