import { create } from 'zustand';

// swap className from one button to another
const useButton = create((set) => ({
  element: null,
  className: 'active-btn',
  
  setActive: (element) => set((state) => {
    // delete className from previous element
    if (state.previousElement) {
      state.previousElement.classList.remove(state.className);
    }
    
    // add class to new element
    if (element) {
      element.classList.add(state.className);
    }

    return {
      previousElement: element
    };
  })
}));

export default useButton