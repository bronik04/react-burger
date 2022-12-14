import React from 'react';
import profileStyles from './profile-nav.module.scss';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import {fetchLogout} from "../../services/auth/auth-async-thunks";
import {useAppDispatch, useAppSelector} from "../../services/store";
import {selectAuth} from "../../services/auth/auth-selectors";

const ProfileNav = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const { isAuth } = useAppSelector(selectAuth);

  const logout:  React.MouseEventHandler<HTMLButtonElement> = () => {
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
        {pathname === '/profile'
          ? `В этом разделе вы можете изменить свои персональные данные`
          : `В этом разделе вы можете просмотреть свою историю заказов`}
      </p>
    </nav>
  );
};

export default ProfileNav;
