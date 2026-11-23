import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createBookingSlice } from './bookingSlice.js';
import { createAuthSlice } from './authSlice.js';
import { createSavedSlice } from './savedSlice.js';
import { createUiSlice } from './uiSlice.js';

const STORE_VERSION = 2;

const migrate = (persistedState, version) => {
  const state = persistedState || {};
  if (version < 2) {
    const oldItems = state.booking?.items ?? [];
    return {
      ...state,
      booking: {
        ...state.booking,
        items: oldItems.map((item) => ({ ...item, helmet: item.helmet ?? false })),
      },
    };
  }
  return state;
};

const merge = (persistedState, currentState) => ({
  ...currentState,
  booking: { ...currentState.booking, ...persistedState?.booking },
  auth: { ...currentState.auth, ...persistedState?.auth },
  saved: { ...currentState.saved, ...persistedState?.saved },
});

export const useStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...args) => ({
          ...createBookingSlice(...args),
          ...createAuthSlice(...args),
          ...createSavedSlice(...args),
          ...createUiSlice(...args),
        }))
      ),
      {
        name: 'bike-store',
        version: STORE_VERSION,
        migrate,
        merge,
        partialize: (state) => ({
          booking: { items: state.booking.items },
          auth: { user: state.auth.user },
          saved: { ids: state.saved.ids },
        }),
      }
    ),
    { name: 'BikeStore', enabled: true }
  )
);
