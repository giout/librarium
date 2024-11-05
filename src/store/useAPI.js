import { create } from 'zustand';
import { searchBooks } from '../api/get/books';

const useAPI = create((set) => ({
  books: [],
  clean: () => {
    set({ books: [] })
  },
  getBooks: async (section, param) => {
    const data = await searchBooks(section, param);
    set({ books: data });
  },
}));

export default useAPI;