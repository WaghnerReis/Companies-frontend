import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Companies from '../pages/Companies';
import Company from '../pages/Company';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/Companies" isPrivate component={Companies} />
    <Route path="/Company/:id" isPrivate component={Company} />
  </Switch>
);
