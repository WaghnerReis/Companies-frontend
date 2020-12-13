import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Companies from '../pages/Companies';
import Company from '../pages/Company';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} exact />
    <Route path="/Companies" component={Companies} />
    <Route path="/Company/:id" component={Company} />
  </Switch>
);
