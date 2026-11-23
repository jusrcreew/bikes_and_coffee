export const createSavedSlice = (set) => ({
  saved: {
    ids: [],

    toggleSaved: (id) =>
      set(
        (state) => {
          const index = state.saved.ids.indexOf(id);
          if (index === -1) {
            state.saved.ids.push(id);
          } else {
            state.saved.ids.splice(index, 1);
          }
        },
        false,
        'saved/toggleSaved'
      ),
  },
});
