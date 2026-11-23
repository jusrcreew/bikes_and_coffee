import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../store/index.js';
import { formatPrice } from '../utils/format.js';

export default function CheckoutPage() {
  const user = useStore((state) => state.auth.user);
  const status = useStore((state) => state.ui.status);
  const error = useStore((state) => state.ui.error);
  const total = useStore((state) => state.cart.getFinalTotal());
  const count = useStore((state) => state.cart.items.length);
  const submitOrder = useStore((state) => state.ui.submitOrder);
  const resetStatus = useStore((state) => state.ui.resetStatus);

  useEffect(() => {
    resetStatus();
  }, [resetStatus]);

  if (!user) return <Navigate to="/login" replace />;

  return (
    <section>
      <h2>Оформление заказа</h2>
      <p>Покупатель: {user.name}</p>
      <p>Позиций: {count}</p>
      <h3>К оплате: {formatPrice(total)}</h3>
      <button onClick={submitOrder} disabled={status === 'loading'}>
        {status === 'loading' ? 'Отправляем...' : 'Оформить заказ'}
      </button>
      {status === 'error' && <p className="error">Ошибка: {error}</p>}
      {status === 'success' && <p className="success">Заказ оформлен! Корзина очищена.</p>}
    </section>
  );
}
