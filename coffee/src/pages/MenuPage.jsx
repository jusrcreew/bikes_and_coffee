import { useShallow } from 'zustand/react/shallow';
import { useStore } from '../store/index.js';
import { selectFilteredDrinks } from '../store/selectors.js';
import Filters from '../components/Filters.jsx';
import DrinkCard from '../components/DrinkCard.jsx';

export default function MenuPage() {
  const visible = useStore(useShallow(selectFilteredDrinks));

  return (
    <section>
      <h2>Меню</h2>
      <Filters />
      {visible.length === 0 && <p>Ничего не найдено</p>}
      <div className="grid">
        {visible.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </section>
  );
}
