import { createOrder } from '../api.js';

export const createUiSlice = (set, get, store) => ({
  ui: {
    query: '',
    category: 'all',
    status: 'idle',
    error: null,

    setQuery: (query) =>
      set(
        (state) => {
          state.ui.query = query;
        },
        false,
        'ui/setQuery'
      ),

    setCategory: (category) =>
      set(
        (state) => {
          state.ui.category = category;
        },
        false,
        'ui/setCategory'
      ),

    resetStatus: () =>
      set(
        (state) => {
          state.ui.status = 'idle';
          state.ui.error = null;
        },
        false,
        'ui/resetStatus'
      ),

    submitOrder: async () => {
      if (get().ui.status === 'loading') return;

      set(
        (state) => {
          state.ui.status = 'loading';
          state.ui.error = null;
        },
        false,
        'ui/submitOrder/loading'
      );

      try {
        await createOrder({ items: get().cart.items });

        set(
          (state) => {
            state.ui.status = 'success';
            state.cart = store.getInitialState().cart;
          },
          false,
          'ui/submitOrder/success'
        );
      } catch (err) {
        set(
          (state) => {
            state.ui.status = 'error';
            state.ui.error = err.message;
          },
          false,
          'ui/submitOrder/error'
        );
      }
    },
  },
});
