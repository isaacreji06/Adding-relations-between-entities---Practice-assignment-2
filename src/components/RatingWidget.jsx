import { useState } from 'react';
import PropTypes from 'prop-types';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${
              (hoveredRating || rating) >= star ? 'filled' : ''
            }`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
          >
            ★
          </span>
        ))}
      </div>
      <button 
        onClick={handleRatingSubmit}
        disabled={rating < 1}
        className="submit-rating"
      >
        Submit Rating
      </button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;