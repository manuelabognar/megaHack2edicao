import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProfileCartorio from '../pages/ProfileCartorio';

export default function CartorioRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cartorio" exact component={ProfileCartorio} />
      </Switch>
  </BrowserRouter>
  ); 
}
