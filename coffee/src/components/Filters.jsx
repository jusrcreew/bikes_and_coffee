import { useStore } from '../store/index.js';

const categories = [
  { value: 'all', label: 'Все' },
  { value: 'coffee', label: 'Кофе' },
  { value: 'tea', label: 'Чай' },
  { value: 'cold', label: 'Холодные' },
  { value: 'other', label: 'Другое' },
];

export default function Filters() {
  const query = useStore((state) => state.ui.query);
  const category = useStore((state) => state.ui.category);
  const setQuery = useStore((state) => state.ui.setQuery);
  const setCategory = useStore((state) => state.ui.setCategory);

  return (
    <div className="filters">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск напитка..."
      />
      {categories.map((c) => (
        <button
          key={c.value}
          className={category === c.value ? 'active' : ''}
          onClick={() => setCategory(c.value)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
