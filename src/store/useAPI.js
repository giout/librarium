import { create } from 'zustand';
import { searchForMedia } from '../api/get/media';

const useAPI = create((set, get) => ({
    data: [],
    results: 0,
    page: 0,
    clean: () => set({ data: [], results: 0, page: 0 }),
    searchData: async (section, param) => {
        const result = await searchForMedia({ 
            section, 
            param, 
            page: get().page + 1
        });
        set({
            data: [...get().data, ...result.media],
            results: result.results,
            page: get().page + 1
        });
    }
}));

export default useAPI;