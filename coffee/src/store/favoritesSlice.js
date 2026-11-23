export const createFavoritesSlice = (set) => ({
  favorites: {
    ids: [],

    toggleFavorite: (id) =>
      set(
        (state) => {
          const index = state.favorites.ids.indexOf(id);
          if (index === -1) {
            state.favorites.ids.push(id);
          } else {
            state.favorites.ids.splice(index, 1);
          }
        },
        false,
        'favorites/toggleFavorite'
      ),
  },
});
