import { create } from 'zustand';

const useBookModal = create((set) => ({
  showModal: false,

  toggleModal: () => set((state) => {
    return {
        showModal: !state.showModal
    }
  })
}));

export default useBookModal