import React from 'react';
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";
import styles from '../components/app/app.module.scss';

const ConstructorPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={styles.container}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider>
  );
};

export default ConstructorPage;
