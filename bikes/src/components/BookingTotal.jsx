import { useStore } from '../store/index.js';
import { useRenderCount } from '../hooks/useRenderCount.js';
import { formatPrice } from '../utils/format.js';

export default function BookingTotal() {
  const renders = useRenderCount('BookingTotal');
  const total = useStore((state) => state.booking.getFinalTotal());

  return (
    <h3>
      Итого: {formatPrice(total)} <span className="renders">(рендеров: {renders})</span>
    </h3>
  );
}
