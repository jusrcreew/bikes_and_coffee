export const createCartSlice = (set, get) => ({
  cart: {
    items: [],

    addItem: (drink) =>
      set(
        (state) => {
          const existing = state.cart.items.find((item) => item.id === drink.id);
          if (existing) {
            existing.qty += 1;
          } else {
            state.cart.items.push({
              id: drink.id,
              title: drink.title,
              price: drink.price,
              size: 'M',
              qty: 1,
            });
          }
        },
        false,
        'cart/addItem'
      ),

    setQty: (id, qty) =>
      set(
        (state) => {
          const item = state.cart.items.find((i) => i.id === id);
          if (!item || qty < 1) return;
          item.qty = qty;
        },
        false,
        'cart/setQty'
      ),

    removeItem: (id) =>
      set(
        (state) => {
          state.cart.items = state.cart.items.filter((item) => item.id !== id);
        },
        false,
        'cart/removeItem'
      ),

    clear: () =>
      set(
        (state) => {
          state.cart.items = [];
        },
        false,
        'cart/clear'
      ),

    getFinalTotal: () => {
      const sum = get().cart.items.reduce((acc, item) => acc + item.price * item.qty, 0);
      return get().auth.user ? sum * 0.9 : sum;
    },
  },
});
