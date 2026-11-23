import { createBooking } from '../api.js';

export const createUiSlice = (set, get, store) => ({
  ui: {
    query: '',
    type: 'all',
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

    setType: (type) =>
      set(
        (state) => {
          state.ui.type = type;
        },
        false,
        'ui/setType'
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

    submitBooking: async () => {
      if (get().ui.status === 'loading') return;

      set(
        (state) => {
          state.ui.status = 'loading';
          state.ui.error = null;
        },
        false,
        'ui/submitBooking/loading'
      );

      try {
        await createBooking({ items: get().booking.items });

        set(
          (state) => {
            state.ui.status = 'success';
            state.booking = store.getInitialState().booking;
          },
          false,
          'ui/submitBooking/success'
        );
      } catch (err) {
        set(
          (state) => {
            state.ui.status = 'error';
            state.ui.error = err.message;
          },
          false,
          'ui/submitBooking/error'
        );
      }
    },
  },
});
