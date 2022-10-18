import React, {useEffect, useState} from 'react';
import './app.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import {getIngredientsData} from "../../utils/burger-api";
import Modal from "../modal/modal";
import ErrorMessage from "../error-message/error-message";
import {IngredientContext} from "../../services/context/ingredient-context";


function App() {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(false);

  const closeErrModal = () => {
    setError(false);
  }

  useEffect(() => {
    getIngredientsData()
      .then(json => setIngredients(json.data))
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <div className='App'>
      <AppHeader/>
      <main className={`container`}>
        <IngredientContext.Provider value={{ingredients, setIngredients}}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </IngredientContext.Provider>

      </main>
      {
        error &&
        <Modal
          onOverlayClick={closeErrModal}
          closeAllModals={closeErrModal}
        >
          <ErrorMessage
            error={error}
            closeModal={closeErrModal}
          />
        </Modal>
      }
    </div>
  );
}

export default App;