import { useShallow } from 'zustand/react/shallow';
import { Link } from 'react-router-dom';
import { useStore } from '../store/index.js';
import { useRenderCount } from '../hooks/useRenderCount.js';
import { formatPrice } from '../utils/format.js';

export default function BookingBadge() {
  const renders = useRenderCount('BookingBadge');
  const { count, total } = useStore(
    useShallow((state) => ({
      count: state.booking.items.length,
      total: state.booking.getFinalTotal(),
    }))
  );

  return (
    <Link to="/booking" className="badge">
      🚲 Позиций: {count} · Итого: {formatPrice(total)}
      <span className="renders"> (рендеров: {renders})</span>
    </Link>
  );
}
