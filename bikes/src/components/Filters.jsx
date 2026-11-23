import { useStore } from '../store/index.js';

const types = [
  { value: 'all', label: 'Все' },
  { value: 'city', label: 'Городские' },
  { value: 'mountain', label: 'Горные' },
  { value: 'road', label: 'Шоссейные' },
  { value: 'electric', label: 'Электро' },
];

export default function Filters() {
  const query = useStore((state) => state.ui.query);
  const type = useStore((state) => state.ui.type);
  const setQuery = useStore((state) => state.ui.setQuery);
  const setType = useStore((state) => state.ui.setType);

  return (
    <div className="filters">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск велосипеда..."
      />
      {types.map((t) => (
        <button
          key={t.value}
          className={type === t.value ? 'active' : ''}
          onClick={() => setType(t.value)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
