import create from "zustand";

const useStore = create((set) => ({
  show_sidebar: false,
  mono_account_code: "",
  email: "",
  toggleShowSidebar: () =>
    set((state) => ({ show_sidebar: !state.show_sidebar })),
  setMonoCode: (code) => set((state) => (state.mono_account_code = code)),
  setEmail: (email) => set((state) => (state.email = email)),
}));

export default useStore;
