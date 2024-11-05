import { create } from 'zustand';

const useSection = create((set) => ({
  section: 'films',
  setSection: (string) => set(() => {
    return {
        section: string
    }
  })
}));

export default useSection