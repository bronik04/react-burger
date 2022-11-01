import React from 'react';
import styles from "../burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {deleteIngredient} from "../../../services/slices/constructor-slice";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";

const ConstructorItem = ({filling}) => {
   const dispatch = useDispatch();

   const deleteItem = (filling) => {
     return () => dispatch(deleteIngredient(filling))
   }
   const [{isDrag}, dragRef] = useDrag({
     type: 'constructor-item',
     collect: monitor => ({
       isDrag: monitor.isDragging()
     })
   });

   const [, dropTarget] = useDrop({
     accept: 'constructor-item',
     collect: monitor => ({

     })
   })

  return (
    <div>
      <li
        className={styles.list__item}
        ref={dragRef}
      >
        <DragIcon type={'primary'} />
        <ConstructorElement
          isLocked={false}
          text={filling.name}
          thumbnail={filling.image}
          price={filling.price}
          handleClose={deleteItem(filling)}
        />
      </li>
    </div>
  );
};

export default ConstructorItem;
