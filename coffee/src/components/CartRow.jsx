import { memo } from 'react';
import { useStore } from '../store/index.js';
import { useRenderCount } from '../hooks/useRenderCount.js';
import { formatPrice } from '../utils/format.js';

function CartRow({ id }) {
  const renders = useRenderCount(`CartRow #${id}`);
  const item = useStore((state) => state.cart.items.find((i) => i.id === id));
  const setQty = useStore((state) => state.cart.setQty);
  const removeItem = useStore((state) => state.cart.removeItem);

  if (!item) return null;

  return (
    <li className="row">
      <span className="grow">
        {item.title} (размер {item.size})
      </span>
      <span>{formatPrice(item.price)}</span>
      <button onClick={() => setQty(id, item.qty - 1)}>−</button>
      <span className="qty">{item.qty}</span>
      <button onClick={() => setQty(id, item.qty + 1)}>+</button>
      <span>{formatPrice(item.price * item.qty)}</span>
      <button onClick={() => removeItem(id)}>✕</button>
      <span className="renders">рендеров: {renders}</span>
    </li>
  );
}

export default memo(CartRow);
