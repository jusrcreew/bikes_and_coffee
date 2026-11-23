import { NavLink } from 'react-router-dom';
import { useStore } from '../store/index.js';
import BookingBadge from './BookingBadge.jsx';

export default function Header() {
  const user = useStore((state) => state.auth.user);
  const logout = useStore((state) => state.auth.logout);

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" end>Каталог</NavLink>
        <NavLink to="/booking">Заявка</NavLink>
        <NavLink to="/confirm">Подтверждение</NavLink>
      </nav>
      <BookingBadge />
      {user ? (
        <div className="user">
          <span>👤 {user.name} (скидка 10%)</span>
          <button onClick={logout}>Выйти</button>
        </div>
      ) : (
        <NavLink to="/login">Войти</NavLink>
      )}
    </header>
  );
}
