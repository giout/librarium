import { create } from 'zustand';

const useSearchInput = create((set) => ({
  searchInput: '',
  setSearchInput: (string) => set({ searchInput: string})
}));

export default useSearchInput;