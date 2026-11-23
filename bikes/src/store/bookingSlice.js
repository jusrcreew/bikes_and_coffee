export const createBookingSlice = (set, get) => ({
  booking: {
    items: [],

    addBike: (bike) =>
      set(
        (state) => {
          const existing = state.booking.items.find((item) => item.id === bike.id);
          if (existing) return;
          state.booking.items.push({
            id: bike.id,
            title: bike.title,
            pricePerHour: bike.pricePerHour,
            type: bike.type,
            hours: 1,
            helmet: false,
          });
        },
        false,
        'booking/addBike'
      ),

    setHours: (id, hours) =>
      set(
        (state) => {
          const item = state.booking.items.find((i) => i.id === id);
          if (!item) return;
          const whole = Math.floor(Number(hours)) || 1;
          item.hours = Math.max(1, whole);
        },
        false,
        'booking/setHours'
      ),

    removeBike: (id) =>
      set(
        (state) => {
          state.booking.items = state.booking.items.filter((item) => item.id !== id);
        },
        false,
        'booking/removeBike'
      ),

    clear: () =>
      set(
        (state) => {
          state.booking.items = [];
        },
        false,
        'booking/clear'
      ),

    getFinalTotal: () => {
      const sum = get().booking.items.reduce((acc, item) => acc + item.pricePerHour * item.hours, 0);
      return get().auth.user ? sum * 0.9 : sum;
    },
  },
});
