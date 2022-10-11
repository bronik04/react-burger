import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import { getIngredientsData } from "./utils/burger-api";
import Modal from "./components/modal/modal";
import ErrorMessage from "./components/error-message/error-message";

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
        <BurgerIngredients ingredients={ingredients}/>
        <BurgerConstructor ingredients={ingredients}/>
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
