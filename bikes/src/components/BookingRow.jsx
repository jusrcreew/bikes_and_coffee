import { memo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '../store/index.js';
import { useRenderCount } from '../hooks/useRenderCount.js';
import { formatPrice } from '../utils/format.js';

function BookingRow({ id }) {
  const renders = useRenderCount(`BookingRow #${id}`);
  const item = useStore(
    useShallow((state) => {
      const found = state.booking.items.find((i) => i.id === id);
      if (!found) return null;
      return {
        title: found.title,
        pricePerHour: found.pricePerHour,
        hours: found.hours,
        helmet: found.helmet,
      };
    })
  );
  const setHours = useStore((state) => state.booking.setHours);
  const removeBike = useStore((state) => state.booking.removeBike);

  if (!item) return null;

  return (
    <li className="row">
      <span className="grow">
        {item.title} (шлем: {item.helmet ? 'да' : 'нет'})
      </span>
      <span>{formatPrice(item.pricePerHour)}/ч</span>
      <button onClick={() => setHours(id, item.hours - 1)}>−</button>
      <span className="qty">{item.hours} ч</span>
      <button onClick={() => setHours(id, item.hours + 1)}>+</button>
      <span>{formatPrice(item.pricePerHour * item.hours)}</span>
      <button onClick={() => removeBike(id)}>✕</button>
      <span className="renders">рендеров: {renders}</span>
    </li>
  );
}

export default memo(BookingRow);
