import { useStore } from './index.js';

useStore.subscribe(
  (state) => state.cart.items.length,
  (count, prevCount) => {
    console.log(`[подписка] позиций в корзине: ${prevCount} → ${count}`);
  }
);
