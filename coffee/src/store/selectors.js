import { drinks } from '../data/drinks.js';

export const selectFilteredDrinks = (state) => {
  const query = state.ui.query.trim().toLowerCase();
  const category = state.ui.category;
  return drinks.filter((drink) => {
    const matchCategory = category === 'all' || drink.category === category;
    const matchQuery = drink.title.toLowerCase().includes(query);
    return matchCategory && matchQuery;
  });
};

export const selectCartIds = (state) => state.cart.items.map((item) => item.id);
