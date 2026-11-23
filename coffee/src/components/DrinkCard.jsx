import { memo } from 'react';
import { useStore } from '../store/index.js';
import { formatPrice } from '../utils/format.js';

function DrinkCard({ drink }) {
  const isFavorite = useStore((state) => state.favorites.ids.includes(drink.id));
  const addItem = useStore((state) => state.cart.addItem);
  const toggleFavorite = useStore((state) => state.favorites.toggleFavorite);

  return (
    <div className="card">
      <h3>{drink.title}</h3>
      <p>{formatPrice(drink.price)}</p>
      <button onClick={() => addItem(drink)}>В корзину</button>
      <button onClick={() => toggleFavorite(drink.id)}>{isFavorite ? '❤️' : '🤍'}</button>
    </div>
  );
}

export default memo(DrinkCard);
