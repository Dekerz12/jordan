import { create } from "zustand";

const useModal = create((set) => {
  return {
    isOpen: false,
    status: "login",
    toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
    closeModal: () => set(() => ({ isOpen: false })),
    loginModal: () => set(() => ({ status: "login" })),
    registerModal: () => set(() => ({ status: "register" })),
    publishModal: () => set(() => ({ status: "publish" })),
    colorPickerModal: () => set(() => ({ status: "color" })),
  };
});

export default useModal;
