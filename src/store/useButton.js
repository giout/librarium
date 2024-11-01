import { create } from 'zustand';

// swap className from one button to another
const useButton = create((set) => ({
  element: null,
  classActive: 'active-btn',
  classNotActive: 'not-active-btn',
  
  setActive: (element) => set((state) => {
    // delete className from previous element
    if (state.previousElement) {
      state.previousElement.classList.remove(state.classActive);
      state.previousElement.classList.add(state.classNotActive);
    }
    
    // add class to new element
    if (element) {
      element.classList.add(state.classActive);
      element.classList.remove(state.classNotActive);
    }

    return {
      previousElement: element
    };
  })
}));

export default useButton