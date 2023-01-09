import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import React, { FC } from 'react';
import { selectAuth } from '../../services/auth/auth-selectors';
import {useAppSelector} from "../../services/store";

type TProtectedRoute = RouteProps & {
  onlyForAuth?: boolean;
};

export const ProtectedRoute: FC<TProtectedRoute> = ({
  onlyForAuth,
  children,
  ...rest
}) => {
  const { isAuth } = useAppSelector(selectAuth);
  const location = useLocation();

  if (!onlyForAuth && isAuth) {
    // todo избавиться от any?
    const { from }: any = location?.state || { from: { pathname: '/' } };
    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    );
  }

  if (onlyForAuth && !isAuth) {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      </Route>
    );
  }

  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
