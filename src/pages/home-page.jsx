import React from 'react';
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";

const ConstructorPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={`container`}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider>
  );
};

export default ConstructorPage;
