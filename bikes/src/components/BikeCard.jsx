import { memo } from 'react';
import { useStore } from '../store/index.js';
import { formatPrice } from '../utils/format.js';

function BikeCard({ bike }) {
  const isSaved = useStore((state) => state.saved.ids.includes(bike.id));
  const inBooking = useStore((state) => state.booking.items.some((i) => i.id === bike.id));
  const addBike = useStore((state) => state.booking.addBike);
  const toggleSaved = useStore((state) => state.saved.toggleSaved);

  return (
    <div className="card">
      <h3>{bike.title}</h3>
      <p>{formatPrice(bike.pricePerHour)} / час</p>
      <button onClick={() => addBike(bike)} disabled={inBooking}>
        {inBooking ? 'В заявке' : 'В заявку'}
      </button>
      <button onClick={() => toggleSaved(bike.id)}>{isSaved ? '❤️' : '🤍'}</button>
    </div>
  );
}

export default memo(BikeCard);
