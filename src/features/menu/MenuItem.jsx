import PropTypes from 'prop-types'
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { /* id, */ name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  )
}

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,            // Assuming id is a number
    name: PropTypes.string.isRequired,          // Name is a string
    unitPrice: PropTypes.number.isRequired,     // Unit price is a number
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired, // Ingredients is an array of strings
    soldOut: PropTypes.bool.isRequired,         // SoldOut is a boolean
    imageUrl: PropTypes.string.isRequired,      // Image URL is a string
  }).isRequired,
}
export default MenuItem;
