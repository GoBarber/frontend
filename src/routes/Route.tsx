import React from 'react';

import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      // Sobrescreve como será a reenderização da rota. E para a verificação há quatro casos:
      // 1. Deslogado (!user) e  Rota aberta (!isPrivate)
      // 2. Deslogado (!user) e Rota privada (isPrivate)
      // 3. Logado (user) e Rota aberta (!isPrivate)
      // 4. Logado (user) e Rota aberta (isPrivate)

      // isPrivate === !!user entra nos casos 1 e 4.
      // isPrivate ? 2 : 3;
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
