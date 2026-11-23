import { useStore } from './index.js';

useStore.subscribe(
  (state) => state.booking.items.length,
  (count, prevCount) => {
    console.log(`[подписка] велосипедов в заявке: ${prevCount} → ${count}`);
  }
);
