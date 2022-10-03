import React from 'react';
import { DragIcon, DeleteIcon, CurrencyIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./constructor-card.module.css";
import data from "../../utils/data";


const constructorCard = ({image, name, price}) => {
  return (
    <article className={`${Styles.constructor}`}>

      {/*<DragIcon type={"primary"}/>*/}
      {/*<div className={`pl-6 pr-6 pt-4 pb-4 ${Styles.card}`}>*/}
      {/*  <img className={Styles.image} src={image} alt={name}/>*/}
      {/*  <p className={`text text_type_main-default ${Styles.name}`}>{name}</p>*/}
      {/*  <p className={`text text_type_main-default`}>{price}</p>*/}
      {/*  <CurrencyIcon type={"primary"}/>*/}
      {/*  <DeleteIcon type={"primary"}/>*/}
      {/*</div>*/}
    </article>
  );
};

export default constructorCard;
