import { useStore } from '../store/index.js';
import { useRenderCount } from '../hooks/useRenderCount.js';
import { formatPrice } from '../utils/format.js';

export default function CartTotal() {
  const renders = useRenderCount('CartTotal');
  const total = useStore((state) => state.cart.getFinalTotal());

  return (
    <h3>
      Итого: {formatPrice(total)} <span className="renders">(рендеров: {renders})</span>
    </h3>
  );
}
