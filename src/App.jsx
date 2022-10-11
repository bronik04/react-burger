import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import { getIngredientsData } from "./utils/burger-api";

function App() {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredientsData()
      .then(json => setIngredients(json.data))
      .catch(() => {
        alert('Ошибка при получении данных');
      });
  }, []);


  return (
    <div className='App'>
      <AppHeader/>
      <main className={`container`}>
        <BurgerIngredients ingredients={ingredients}/>
        <BurgerConstructor ingredients={ingredients}/>
      </main>
    </div>
  );
}

export default App;
