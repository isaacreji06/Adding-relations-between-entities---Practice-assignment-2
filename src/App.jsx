import { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality sound with noise cancellation.',
    image:
      'https://th.bing.com/th/id/OIP.RZjRvaO9IfDAwpD20I7e5wHaHa?rs=1&pid=ImgDetMain',
    avgRating: 4.2,
    totalRatings: 10,
  },
  {
    id: 2,
    name: 'Smartwatch',
    description: 'Track your fitness and notifications.',
    image:
      'https://th.bing.com/th/id/OIP.4lfH40ylpKIm6phEodklOwAAAA?rs=1&pid=ImgDetMain',
    avgRating: 3.8,
    totalRatings: 15,
  },
  {
    id: 3,
    name: 'Portable Speaker',
    description: 'Powerful sound in a compact design.',
    image:
      'https://ntptechstore.com/wp-content/uploads/2025/01/71HdLDJEEUL._SY450.jpg.webp',
    avgRating: 4.5,
    totalRatings: 8,
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const newTotalRatings = product.totalRatings + 1;
          const newAvgRating =
            (product.avgRating * product.totalRatings + newRating) /
            newTotalRatings;

          return {
            ...product,
            avgRating: newAvgRating,
            totalRatings: newTotalRatings,
          };
        }
        return product;
      })
    );
  };

  return (
    <div className="app">
      <h1>Product Ratings</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
