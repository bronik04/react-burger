import React, { useRef } from 'react';
import styles from '../burger-constructor.module.css';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {deleteIngredient, moveCard} from '../../../services/slices/constructor-slice';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

const ConstructorItem = ({ filling, index }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const id = filling._id;

  const deleteItem = filling => {
    return () => dispatch(deleteIngredient(filling));
  };

  const [{ handlerId }, drop] = useDrop({
    accept: 'constructor-item',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveCard({dragIndex, hoverIndex}));

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'constructor-item',
    item: () => {
      return { id, index };
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li
      className={styles.list__item}
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
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
  );
};

export default ConstructorItem;
