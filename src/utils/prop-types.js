import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
});