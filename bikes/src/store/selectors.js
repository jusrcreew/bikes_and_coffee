import { bikes } from '../data/bikes.js';

export const selectFilteredBikes = (state) => {
  const query = state.ui.query.trim().toLowerCase();
  const type = state.ui.type;
  return bikes.filter((bike) => {
    const matchType = type === 'all' || bike.type === type;
    const matchQuery = bike.title.toLowerCase().includes(query);
    return matchType && matchQuery;
  });
};

export const selectBookingIds = (state) => state.booking.items.map((item) => item.id);
