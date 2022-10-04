import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients
    from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor
    from "./components/burger-constructor/burger-constructor";
import { url } from "./utils/consts";

function App() {

    const [ingredients, setIngredients] = useState([]);

    const getIngredientsData = () => {
        fetch(url)
            .then(res => res.json())
            .then(json => setIngredients(json.data))
            .catch((err) => {
                console.log(err);
                alert('Ошибка при получении данных');
            });
    }
    useEffect(() => {
        getIngredientsData();
    }, []);


  return (
    <div className="App">
            <AppHeader/>
            <main className={`container`}>
                <BurgerIngredients ingredients={ingredients}/>
                <BurgerConstructor/>
            </main>

    </div>
  );
}

export default App;
