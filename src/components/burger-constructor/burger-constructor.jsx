import React, {useState} from 'react';
import Styles from './burger-constructor.module.css';
import {
  Button,
  ConstructorElement,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../utils/data";
import TotalPrice from "../total-price/total-price";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = ({ingredients}) => {

  const [isModalOpened, setIsModalOpened] = useState(false);

  const topBun = ingredients.find( ingredient => ingredient._id === '60d3b41abdacab0026a733c6');
  const bottomBun = ingredients.find( ingredient => ingredient._id === '60d3b41abdacab0026a733c6');

  const closeAllModals = (evt) => {
    setIsModalOpened(false);
    console.log(evt.target);
  }

  const handleEscKeydown = (evt) => {
    evt.key === "Escape" && closeAllModals();
    console.log(evt.target);
  };

  const handleModalOpen = (evt) => {
    setIsModalOpened(true);
    console.log(evt.target);
  }

  return (
    <div className={`${Styles.main}`}>
    <div className={`mt-25 mb-10 ${Styles.container}`}>

      {
        topBun &&
          <ConstructorElement
            extraClass={`ml-8`}
            type={"top"}
            isLocked={true}
            text={`${topBun.name} (верх)`}
            thumbnail={topBun.image}
            price={topBun.price}
          />
      }

      <ul className={`${Styles.list}`}>
        {
          ingredients.map(ingredient => {
            return ( (ingredient.type === 'main' || ingredient.type === 'sauce') &&
              <li key={ingredient._id} className={Styles.list__item}>
                <DragIcon type={"primary"}/>
                <ConstructorElement
                  isLocked={false}
                  text={ingredient.name}
                  thumbnail={ingredient.image}
                  price={ingredient.price}/>
              </li>
            )
          })
        }
      </ul>
      {
        bottomBun &&
        <ConstructorElement
          extraClass={`ml-8`}
          type={"bottom"}
          isLocked={true}
          text={`${bottomBun.name} (низ)`}
          thumbnail={bottomBun.image}
          price={bottomBun.price}
        />
      }
    </div>
      <div className={Styles.order}>
        <TotalPrice sum={data[0].price*2}/>
        <Button
          onClick={handleModalOpen}
          htmlType={"button"}
          type="primary"
          size="large">
          Оформить заказ
        </Button>
      </div>

      {
        isModalOpened &&
        <Modal
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
        >
          <OrderDetails
            close={closeAllModals}
          />
        </Modal>
      }

    </div>
  );
};

export default BurgerConstructor;
