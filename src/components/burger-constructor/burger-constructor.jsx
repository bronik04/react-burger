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

  const closeAllModals = () => {
    setIsModalOpened(false);
  }

  const handleEscKeydown = (event) => {
    event.key === "Escape" && closeAllModals();
  };

  const handleModalOpen = (evt) => {
    setIsModalOpened(true);
  }

  return (
    <div className={`${Styles.main}`}>
    <div className={`mt-25 mb-10 ${Styles.container}`}>
        <ConstructorElement
          extraClass={`ml-8`}
          type={"top"} isLocked={true}
          text={data[0].name}
          thumbnail={data[0].image}
          price={data[0].price}
        />

      <ul className={`${Styles.list}`}>
        {
          ingredients.map(item => {
            return ( (item.type === 'main') &&
              <li key={item._id} className={Styles.list__item}>
                <DragIcon type={"primary"}/>
                <ConstructorElement
                  isLocked={false}
                  text={item.name}
                  thumbnail={item.image}
                  price={item.price}/>
              </li>
            )
          })
        }
      </ul>

      <ConstructorElement
        extraClass={`ml-8`}
        type={"bottom"} isLocked={true}
        text={data[0].name}
        thumbnail={data[0].image}
        price={data[0].price}/>
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
