import { useShallow } from 'zustand/react/shallow';
import { Link } from 'react-router-dom';
import { useStore } from '../store/index.js';
import { selectCartIds } from '../store/selectors.js';
import CartRow from '../components/CartRow.jsx';
import CartTotal from '../components/CartTotal.jsx';
import { useRenderCount } from '../hooks/useRenderCount.js';

export default function CartPage() {
  const renders = useRenderCount('CartPage');
  const ids = useStore(useShallow(selectCartIds));
  const clear = useStore((state) => state.cart.clear);

  return (
    <section>
      <h2>
        Корзина <span className="renders">(рендеров страницы: {renders})</span>
      </h2>
      <p className="hint">
        Нажимайте «+»/«−» у одной строки и смотрите счётчики: растут только эта строка, значок в шапке и итог.
        Остальные строки и сама страница не перерисовываются.
      </p>
      {ids.length === 0 ? (
        <p>Корзина пуста. Добавьте напитки в меню.</p>
      ) : (
        <ul className="list">
          {ids.map((id) => (
            <CartRow key={id} id={id} />
          ))}
        </ul>
      )}
      <CartTotal />
      <button onClick={clear} disabled={ids.length === 0}>Очистить</button>
      <Link to="/checkout" className="link-btn">Оформить заказ</Link>
    </section>
  );
}
