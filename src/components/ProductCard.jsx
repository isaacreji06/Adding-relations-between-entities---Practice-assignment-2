import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="rating-info">
          <p>Average Rating: {product.avgRating.toFixed(1)} ★</p>
          <RatingWidget 
            productId={product.id} 
            onRatingSubmit={onRatingSubmit}
          />
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;