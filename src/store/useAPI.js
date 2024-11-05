import { create } from 'zustand';
import { searchForMedia } from '../api/get/media';

const useAPI = create((set) => ({
    data: [],
    results: 0,
    clean: () => set({ data: [] }),
    fetchData: async (section, param, page) => {
        const result = await searchForMedia(section, param, page);
        set ({
            data: result.media,
            results: result.results
        })
    }
}));

export default useAPI;