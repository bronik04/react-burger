import React, { useEffect } from 'react';
import './app.scss';
import AppHeader from '../app-header/app-header';
import Modal from '../modal/modal';
import ErrorMessage from '../error-message/error-message';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeErrModal,
  getIngredients,
} from '../../services/slices/ingredients-slice';
import { Switch, Route } from 'react-router-dom';
import Register from '../../pages/register/register';
import ConstructorPage from '../../pages/home-page';
import NotFound404 from '../../pages/not-found/not-found';
import LoginPage from "../../pages/login/login";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";

function App() {
  const errorMessage = useSelector(
    state => state.ingredientReducer.errorMessage,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const closeModal = () => {
    dispatch(closeErrModal());
  };

  return (
    <div className='App'>
      <AppHeader />
      <Switch>
        <Route
          path={'/react-burger'}
          exact={true}
        >
          <ConstructorPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage/>
        </Route>
        <Route path={'/register'}>
          <Register />
        </Route>
        <Route path={'/forgot-password'}>
          <ForgotPasswordPage/>
        </Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>

      {errorMessage && (
        <Modal closeModal={closeModal}>
          <ErrorMessage
            error={errorMessage}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
