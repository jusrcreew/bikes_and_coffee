import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../store/index.js';
import { formatPrice } from '../utils/format.js';

export default function ConfirmPage() {
  const user = useStore((state) => state.auth.user);
  const status = useStore((state) => state.ui.status);
  const error = useStore((state) => state.ui.error);
  const total = useStore((state) => state.booking.getFinalTotal());
  const count = useStore((state) => state.booking.items.length);
  const submitBooking = useStore((state) => state.ui.submitBooking);
  const resetStatus = useStore((state) => state.ui.resetStatus);

  useEffect(() => {
    resetStatus();
  }, [resetStatus]);

  if (!user) return <Navigate to="/login" replace />;

  return (
    <section>
      <h2>Подтверждение заявки</h2>
      <p>Клиент: {user.name}</p>
      <p>Велосипедов: {count}</p>
      <h3>К оплате: {formatPrice(total)}</h3>
      <button onClick={submitBooking} disabled={status === 'loading'}>
        {status === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
      </button>
      {status === 'error' && <p className="error">Ошибка: {error}</p>}
      {status === 'success' && <p className="success">Заявка отправлена! Список очищен.</p>}
    </section>
  );
}
