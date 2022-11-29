import { Redirect, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from "react";

export function ProtectedRoute({ onlyForAuth, children, ...rest }) {
  const { isAuth } = useSelector(state => state.auth);
  const location = useLocation();

  if (!onlyForAuth && isAuth) {
    const { from } = location?.state || { from: { pathname: '/' } };
    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    );
  }

  if (onlyForAuth && !isAuth) {
    return (
      <Route {...rest}>
        <Redirect
          to={{ pathname: '/login', state: { from: location } }}
        />
      </Route>
    );
  }

  return <Route {...rest}>{children}</Route>;
}

export default ProtectedRoute;
