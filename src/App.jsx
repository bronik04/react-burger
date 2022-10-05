import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import {url} from "./utils/consts";
import Modal from "./components/modal/modal";

function App() {

    const [ingredients, setIngredients] = useState([]);
    const [isModalOpened, setIsModalOpened] = useState(false);
    
    const closeAllModals = () => {
      setIsModalOpened(false);
    }

    const handleEscKeydown = (event) => {
        event.key === "Escape" && closeAllModals();
    };

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
          {
            isModalOpened &&
            <Modal
              title={'Детали ингредиента'}
              onOverlayClick={closeAllModals}
              onEscKeydown={handleEscKeydown}
            >
            </Modal>
          }
        </div>
    );
}

export default App;
