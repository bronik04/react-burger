import React from 'react';
import styles from './product-card.module.scss';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientPropType } from '../../utils/prop-types';
import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentIngredient } from '../../services/slices/ingredient-slice';
import { Link, useLocation } from 'react-router-dom';

const IngredientCard = ({ ingredient }) => {

  const location = useLocation();
  const dispatch = useDispatch();
  const { fillings, bun } = useSelector(state => state.constructorReducer);
  let count = 0;

  const handleModalOpen = () => {
    dispatch(selectCurrentIngredient(ingredient));
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: monitor => ({
      isDrag: monitor.isDragging(),
    }),
  });

  if (ingredient.type === 'bun') {
    if (bun !== null && bun._id === ingredient._id) {
      count = 2;
    }
  } else {
    fillings.forEach(filling => {
      if (filling._id === ingredient._id) {
        count += 1;
      }
    });
  }

  return (
    !isDrag && (
      <li
        onClick={handleModalOpen}
        className={`${styles.card}`}
        ref={dragRef}
      >
        <Link
          to={{
            pathname: `ingredients/${ingredient._id}`,
            state: { background: location },
          }}
          className={styles.link}
        >
          {count > 0 && <Counter count={count} />}
          <img
            className={`pl-4 pr-4 ${styles.img}`}
            src={ingredient.image}
            alt={ingredient.name}
          />
          <p className={`mt-1 mb-1 text ${styles.price}`}>
            {ingredient.price}
            {ingredient.price && <CurrencyIcon type={'primary'} />}
          </p>
          <p className={`text text_type_main-default ${styles.name}`}>
            {ingredient.name}
          </p>
        </Link>
      </li>
    )
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientPropType.isRequired,
};

export default IngredientCard;
