import React from 'react';
import profileStyles from './profile-nav.module.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { fetchLogout } from '../../services/slices/auth';
import {useDispatch, useSelector} from 'react-redux';

const ProfileNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(state => state.auth.isAuth);

  const logout = () => {
    if (!isAuth) {
      history.replace('/login');
    }
    dispatch(fetchLogout());
  };

  return (
    <nav className={profileStyles.navigation}>
      <NavLink
        exact
        to={'/profile'}
        className={`text text_type_main-medium text_color_inactive`}
        activeClassName={profileStyles.active}
      >
        Профиль
      </NavLink>
      <NavLink
        exact
        to={'/profile/orders'}
        className={`text text_type_main-medium text_color_inactive`}
        activeClassName={profileStyles.active}
      >
        История заказов
      </NavLink>
      <button
        className={`text text_type_main-medium text_color_inactive mb-20`}
        onClick={logout}
      >
        Выход
      </button>

      <p
        className={'text text_type_main-default text_color_inactive'}
      >
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </nav>
  );
};

export default ProfileNav;
