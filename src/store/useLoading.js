import { create } from 'zustand';

const useLoading = create((set) => ({
    loading: false,
    setLoading: () => {
        set({ loading: true })
    },
    quitLoading: () => {
        set({ loading: false })
    }
}));

export default useLoading