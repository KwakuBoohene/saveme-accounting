import create from "zustand";

const useStore = create((set) => ({
  show_sidebar: true,
  toggleShowSidebar: () =>
    set((state) => ({
      show_sidebar: !state.show_sidebar,
    })),
}));

export default useStore;
