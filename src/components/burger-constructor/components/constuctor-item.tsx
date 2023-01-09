import React, { FC, useRef } from 'react';
import styles from '../burger-constructor.module.scss';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  deleteIngredient,
  moveCard,
} from '../../../services/constructor/constructor-slice';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';
import { IIngredient } from '../../../types';
import {useAppDispatch} from "../../../services/store";

type TConstructorItem = {
  filling: IIngredient;
  index: number;
};

const ConstructorItem: FC<TConstructorItem> = ({ filling, index }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLLIElement>(null);

  const id = filling._id;

  const deleteItem = () => {
    dispatch(deleteIngredient(filling));
  };

  const [{ handlerId }, drop] = useDrop({
    accept: 'constructor-item',
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(item: any, monitor: DropTargetMonitor) {
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

      // @ts-ignore
        const hoverClientY =  clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveCard({ dragIndex, hoverIndex }));

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'constructor-item',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
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
        handleClose={deleteItem}
      />
    </li>
  );
};

export default ConstructorItem;
