import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/index.js';

export default function LoginPage() {
  const [name, setName] = useState('');
  const login = useStore((state) => state.auth.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    login(name);
    navigate('/confirm');
  };

  return (
    <section>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit} className="filters">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
        />
        <button type="submit">Войти</button>
      </form>
    </section>
  );
}
