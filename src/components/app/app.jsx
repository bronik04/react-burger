import React, { useEffect } from 'react';
import styles from './app.module.scss';
import AppHeader from '../app-header/app-header';
import Modal from '../modal/modal';
import ErrorMessage from '../error-message/error-message';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeErrModal,
  getIngredients,
} from '../../services/slices/ingredients-slice';
import {
  Switch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Register from '../../pages/register/register';
import HomePage from '../../pages/home-page';
import NotFound404 from '../../pages/not-found/not-found';
import LoginPage from '../../pages/login/login';
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ResetPasswordPage from '../../pages/reset-password/reset-password';
import ProfilePage from '../../pages/profile/profile';
import OrdersPage from '../../pages/orders/orders';
import IngredientDetails from '../ingredient-details/ingredient-details';
import IngredientPage from '../../pages/ingredients/ingredient-page';
import ProtectedRoute from '../protected-route/protected-route';
import {
  fetchGetUser,
  fetchRefreshToken,
} from '../../services/slices/auth';
import { getCookie } from '../../utils/cookie';

function App() {
  const isAuth = useSelector(state => state.auth.isAuth);
  const accessToken = getCookie('accessToken');
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const background = location.state?.background;
  const errorMessage = useSelector(
    state => state.ingredientReducer.errorMessage,
  );

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  useEffect(() => {
    accessToken && isAuth && dispatch(fetchGetUser());
    if (!isAuth && accessToken) {
      dispatch(fetchRefreshToken());
    }
  }, [accessToken, isAuth]);

  const closeIngredientModal = () => {
    history.goBack();
  };

  const closeModal = () => {
    dispatch(closeErrModal());
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <Switch location={background || location}>
        <Route
          path={'/'}
          exact={true}
        >
          <HomePage />
        </Route>
        <ProtectedRoute path={'/login'}>
          <Route>
            <LoginPage />
          </Route>
        </ProtectedRoute>
        <Route path={'/register'}>
          <Register />
        </Route>
        <Route path={'/forgot-password'}>
          <ForgotPasswordPage />
        </Route>
        <Route path={'/reset-password'}>
          <ResetPasswordPage />
        </Route>
        <ProtectedRoute
          path={'/profile'}
          onlyForAuth
          exact
        >
          <Route>
            <ProfilePage />
          </Route>
        </ProtectedRoute>
        <Route path={'/profile/orders'}>
          <OrdersPage />
        </Route>
        <Route path={'/profile/orders/:id'}></Route>
        <Route path={'/ingredients/:id'}>
          <IngredientPage />
        </Route>
        <Route path={'/feed'}></Route>
        <Route path={'/feed/:id'}></Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>

      {background && (
        <Route path={'/ingredients/:id'}>
          <Modal
            title={'Детали ингредиента'}
            closeModal={closeIngredientModal}
          >
            <IngredientDetails />
          </Modal>
        </Route>
      )}

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
