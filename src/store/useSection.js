import { create } from 'zustand';

const useSection = create((set) => ({
  section: 'name',
  setSection: (string) => set(() => {
    return {
        section: string
    }
  })
}));

export default useSection