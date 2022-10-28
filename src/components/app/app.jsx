import React, { useEffect, useState } from 'react';
import './app.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import ErrorMessage from '../error-message/error-message';
import { useDispatch, useSelector } from 'react-redux';
import ingredientReducer from '../../services/slices/ingredient-slice';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
      <DndProvider backend={HTML5Backend}>
        <main className={`container`}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>

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
