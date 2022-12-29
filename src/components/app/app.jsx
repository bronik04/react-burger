import React, { useEffect } from 'react';
import styles from './app.module.scss';
import AppHeader from '../app-header/app-header';
import Modal from '../modal/modal';
import ErrorMessage from '../error-message/error-message';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeErrModal,
  fetchIngredients,
} from '../../services/ingredients/ingredients-slice';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
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
import { fetchGetUser, fetchRefreshToken } from '../../services/auth/auth';
import { getCookie } from '../../utils/cookie';
import FeedPage from '../../pages/feed/feed';
import FeedDetails from '../feed-details/feed-details';

function App() {
  const { isAuth } = useSelector((state) => state.auth);
  const accessToken = getCookie('accessToken');
  const refreshToken = getCookie('refreshToken');
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const background = location.state?.background;
  const errorMessage = useSelector(
    (state) => state.ingredientReducer.errorMessage,
  );

  useEffect(() => {
    dispatch(fetchIngredients());

    if (accessToken) {
      dispatch(fetchGetUser());
    }
  }, []);

  useEffect(() => {
    if (!isAuth && refreshToken) {
      dispatch(fetchRefreshToken());
    }
  }, []);

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
        <Route path={'/'} exact={true}>
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

        <ProtectedRoute path={'/profile'} onlyForAuth exact>
          <Route>
            <ProfilePage />
          </Route>
        </ProtectedRoute>

        <ProtectedRoute path={'/profile/orders'} onlyForAuth exact>
          <Route>
            <OrdersPage />
          </Route>
        </ProtectedRoute>

        <ProtectedRoute path={'/profile/orders/:id'} onlyForAuth exact>
          <Route>
            <FeedDetails />
          </Route>
        </ProtectedRoute>

        <Route path={'/ingredients/:id'} exact>
          <IngredientPage />
        </Route>

        <Route path={'/feed'} exact>
          <FeedPage />
        </Route>

        <Route path={'/feed/:id'} exact>
          <FeedDetails isModal={false} />
        </Route>

        <Route>
          <NotFound404 />
        </Route>
      </Switch>

      {background && (
        <Switch>
          <Route path={'/ingredients/:id'}>
            <Modal
              title={'Детали ингредиента'}
              closeModal={closeIngredientModal}
            >
              <IngredientDetails />
            </Modal>
          </Route>

          <Route path={'/feed/:id'}>
            <Modal title={'Номер заказа'} closeModal={closeIngredientModal}>
              <FeedDetails isModal={true} />
            </Modal>
          </Route>

          <ProtectedRoute path={'/profile/orders/:id'} onlyForAuth>
            <Route>
              <Modal title={'Номер заказа'} closeModal={closeIngredientModal}>
                <FeedDetails isModal={true} />
              </Modal>
            </Route>
          </ProtectedRoute>
        </Switch>
      )}

      {errorMessage && (
        <Modal closeModal={closeModal}>
          <ErrorMessage error={errorMessage} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;
