import { NavLink } from 'react-router-dom';
import { useStore } from '../store/index.js';
import CartBadge from './CartBadge.jsx';

export default function Header() {
  const user = useStore((state) => state.auth.user);
  const logout = useStore((state) => state.auth.logout);

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" end>Меню</NavLink>
        <NavLink to="/cart">Корзина</NavLink>
        <NavLink to="/checkout">Оформление</NavLink>
      </nav>
      <CartBadge />
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
