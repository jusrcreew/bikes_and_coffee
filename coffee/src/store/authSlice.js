export const createAuthSlice = (set) => ({
  auth: {
    user: null,

    login: (name) =>
      set(
        (state) => {
          const clean = name.trim();
          if (!clean) return;
          state.auth.user = { name: clean };
        },
        false,
        'auth/login'
      ),

    logout: () =>
      set(
        (state) => {
          state.auth.user = null;
        },
        false,
        'auth/logout'
      ),
  },
});
