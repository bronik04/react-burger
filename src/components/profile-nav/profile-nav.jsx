import React from 'react';
import profileStyles from "../../pages/profile/profile.module.scss";
import {NavLink} from "react-router-dom";
import {fetchLogout} from "../../services/slices/auth";
import {useDispatch} from "react-redux";

const ProfileNav = () => {
   const dispatch = useDispatch();

  const logout = () => {
    dispatch(fetchLogout());
  }

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
      <NavLink
        to={'/login'}
        className={`text text_type_main-medium text_color_inactive mb-20`}
        activeClassName={profileStyles.active}
        onClick={logout}
      >
        Выход
      </NavLink>

      <p className={'text text_type_main-default text_color_inactive'}>
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </nav>
  );
};

export default ProfileNav;
