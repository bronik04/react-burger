import React, { useEffect } from 'react';
import './app.css';
import AppHeader from '../app-header/app-header';
import Modal from '../modal/modal';
import ErrorMessage from '../error-message/error-message';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeErrModal,
  getIngredients,
} from '../../services/slices/ingredients-slice';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from "../../pages/register-page";
import ConstructorPage from "../../pages/home-page";

function App() {
  const errorMessage = useSelector(
    state => state.ingredientReducer.errorMessage,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const closeModal = () => {
    dispatch(closeErrModal())
  }

  return (
    <div className='App'>
      <AppHeader />
      <Router>
        <Switch>
          <Route path={'/'} exact={true}>
            <ConstructorPage/>
          </Route>
          <Route path={'/register'}>
            <RegisterPage/>
          </Route>
        </Switch>
      </Router>

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
