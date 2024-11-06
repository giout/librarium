import { create } from 'zustand';

const useLoading = create((set) => ({
    searchLoading: false,
    scrollLoading: false,
    setSearchLoading: (value) => {
        set({ searchLoading: value })
    },
    setScrollLoading: (value) => {
        set({ scrollLoading: value })
    }
}));

export default useLoading