import React from 'react';
import styles from './ingredient-details.module.css';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientDetails = ({image, name, proteins, fat, carbohydrates, calories}) => {
  return (
    <section className={`p-10 ${styles.container}`}>
      <header className={styles.header}>
        <h3 className={`text text_type_main-large`}>Детали ингредиента</h3>
        <button className={styles.close}><CloseIcon type={"primary"}/></button>
      </header>
      <img className={`mb-4`} src={image} alt={name}/>
      <p className={`text text_type_main-medium mb-5`}>{name}</p>
      <div className={`text text_type_main-default text_color_inactive ${styles.energy_value}`}>
        <p className={styles.text}>Калории, ккал</p>
        <span className={styles.calories}>{calories}</span>
        <p className={styles.text}>Белки, г</p>
        <span className={styles.proteins}>{proteins}</span>
        <p className={styles.text}>Жиры, г</p>
        <span className={styles.fat}>{fat}</span>
        <p className={styles.text}>Углеводы, г</p>
        <span className={styles.carbohydrates}>{carbohydrates}</span>
      </div>
    </section>
  );
};

export default IngredientDetails;

