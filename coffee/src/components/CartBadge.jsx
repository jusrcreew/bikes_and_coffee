import { useShallow } from 'zustand/react/shallow';
import { Link } from 'react-router-dom';
import { useStore } from '../store/index.js';
import { useRenderCount } from '../hooks/useRenderCount.js';
import { formatPrice } from '../utils/format.js';

export default function CartBadge() {
  const renders = useRenderCount('CartBadge');
  const { count, total } = useStore(
    useShallow((state) => ({
      count: state.cart.items.length,
      total: state.cart.getFinalTotal(),
    }))
  );

  return (
    <Link to="/cart" className="badge">
      🛒 Позиций: {count} · Итого: {formatPrice(total)}
      <span className="renders"> (рендеров: {renders})</span>
    </Link>
  );
}
