import { useShallow } from 'zustand/react/shallow';
import { Link } from 'react-router-dom';
import { useStore } from '../store/index.js';
import { selectBookingIds } from '../store/selectors.js';
import BookingRow from '../components/BookingRow.jsx';
import BookingTotal from '../components/BookingTotal.jsx';
import { useRenderCount } from '../hooks/useRenderCount.js';

export default function BookingPage() {
  const renders = useRenderCount('BookingPage');
  const ids = useStore(useShallow(selectBookingIds));
  const clear = useStore((state) => state.booking.clear);

  return (
    <section>
      <h2>
        Заявка <span className="renders">(рендеров страницы: {renders})</span>
      </h2>
      <p className="hint">
        Нажимайте «+»/«−» у одной строки и смотрите счётчики: растут только эта строка, значок в шапке и итог.
        Остальные строки и сама страница не перерисовываются.
      </p>
      {ids.length === 0 ? (
        <p>Заявка пуста. Добавьте велосипеды из каталога.</p>
      ) : (
        <ul className="list">
          {ids.map((id) => (
            <BookingRow key={id} id={id} />
          ))}
        </ul>
      )}
      <BookingTotal />
      <button onClick={clear} disabled={ids.length === 0}>Очистить</button>
      <Link to="/confirm" className="link-btn">Подтвердить</Link>
    </section>
  );
}
