import React, { ComponentType, useCallback } from 'react';

import {
  RouteProps as RouterDOMProps,
  Route as RouterDOMRouter,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends RouterDOMProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...props
}) => {
  const { data } = useAuth();

  const checkIfLogged = useCallback(
    () => !!data.uid && !!data.client && !!data.accessToken,
    [data]
  );

  return (
    <RouterDOMRouter
      {...props}
      render={
        () =>
          isPrivate === checkIfLogged() ? (
            <Component />
          ) : (
            <Redirect to={{ pathname: isPrivate ? '/' : 'Companies' }} />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
};

export default Route;
