import React from 'react';
import styles from "../burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {deleteIngredient} from "../../../services/slices/constructor-slice";
import {useDispatch} from "react-redux";

const ConstructorItem = ({filling}) => {
   const dispatch = useDispatch();
  return (
    <div>
      <li
        key={filling.uid}
        className={styles.list__item}
      >
        <DragIcon type={'primary'} />
        <ConstructorElement
          isLocked={false}
          text={filling.name}
          thumbnail={filling.image}
          price={filling.price}
          handleClose={() => dispatch(deleteIngredient(filling))}
        />
      </li>
    </div>
  );
};

export default ConstructorItem;
