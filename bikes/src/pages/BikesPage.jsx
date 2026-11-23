import { useShallow } from 'zustand/react/shallow';
import { useStore } from '../store/index.js';
import { selectFilteredBikes } from '../store/selectors.js';
import Filters from '../components/Filters.jsx';
import BikeCard from '../components/BikeCard.jsx';

export default function BikesPage() {
  const visible = useStore(useShallow(selectFilteredBikes));

  return (
    <section>
      <h2>Каталог велосипедов</h2>
      <Filters />
      {visible.length === 0 && <p>Ничего не найдено</p>}
      <div className="grid">
        {visible.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
    </section>
  );
}
