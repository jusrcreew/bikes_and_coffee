import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createCartSlice } from './cartSlice.js';
import { createAuthSlice } from './authSlice.js';
import { createFavoritesSlice } from './favoritesSlice.js';
import { createUiSlice } from './uiSlice.js';

const STORE_VERSION = 2;

const migrate = (persistedState, version) => {
  const state = persistedState || {};
  if (version < 2) {
    const oldItems = state.cart?.items ?? [];
    return {
      ...state,
      cart: {
        ...state.cart,
        items: oldItems.map((item) => ({ ...item, size: item.size ?? 'M' })),
      },
    };
  }
  return state;
};

const merge = (persistedState, currentState) => ({
  ...currentState,
  cart: { ...currentState.cart, ...persistedState?.cart },
  auth: { ...currentState.auth, ...persistedState?.auth },
  favorites: { ...currentState.favorites, ...persistedState?.favorites },
});

export const useStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...args) => ({
          ...createCartSlice(...args),
          ...createAuthSlice(...args),
          ...createFavoritesSlice(...args),
          ...createUiSlice(...args),
        }))
      ),
      {
        name: 'coffee-store',
        version: STORE_VERSION,
        migrate,
        merge,
        partialize: (state) => ({
          cart: { items: state.cart.items },
          auth: { user: state.auth.user },
          favorites: { ids: state.favorites.ids },
        }),
      }
    ),
    { name: 'CoffeeStore', enabled: true }
  )
);
