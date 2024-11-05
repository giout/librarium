import { create } from 'zustand';

const useModal = create((set) => ({
  showModal: false,

  toggleModal: () => set((state) => {
    return {
        showModal: !state.showModal
    }
  })
}));

export default useModal