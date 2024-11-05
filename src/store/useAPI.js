import { create } from 'zustand';

const useAPI = create((set) => ({
  books: [],
  clean: () => {
    set({ books: [] })
  },
  getBooks: async () => {
    const data = [];
    set({ books: data });
  },
}));

export default useAPI;