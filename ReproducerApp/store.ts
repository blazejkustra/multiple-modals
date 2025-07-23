import { create } from 'zustand';

type ModalStore = {
  modal1Visible: boolean;
  modal2Visible: boolean;
  modal3Visible: boolean;

  openModal1: () => void;
  closeModal1: () => void;

  openModal2: () => void;
  closeModal2: () => void;

  openModal3: () => void;
  closeModal3: () => void;
};

export const useModalStore = create<ModalStore>(set => ({
  modal1Visible: false,
  modal2Visible: false,
  modal3Visible: false,

  openModal1: () => set({ modal1Visible: true }),
  closeModal1: () => set({ modal1Visible: false }),

  openModal2: () => set({ modal2Visible: true }),
  closeModal2: () => set({ modal2Visible: false }),

  openModal3: () => set({ modal3Visible: true }),
  closeModal3: () => set({ modal3Visible: false }),
}));
