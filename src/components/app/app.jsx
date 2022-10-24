import React, { useEffect, useState } from 'react';
import './app.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import ErrorMessage from '../error-message/error-message';
import { useDispatch, useSelector } from 'react-redux';
import ingredientReducer from '../../services/slices/ingredient-slice';

function App() {
  const errorMessage = useSelector(
    state => state.ingredientReducer.errorMessage,
  );
  const dispatch = useDispatch();

  // todo доработать функцию закрытия модального окна с ошибкой
  const closeErrModal = () => {};

  return (
    <div className='App'>
      <AppHeader />
      <main className={`container`}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
      {errorMessage && (
        <Modal closeModal={closeErrModal}>
          <ErrorMessage
            error={errorMessage}
            closeModal={closeErrModal}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
