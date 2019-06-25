// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './router/home'

export const AppRoute = ({
  component: Component,
  path,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        <Component {...props} routes={routes} />
      }
    />
  );
};

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  
];

export { routes };
