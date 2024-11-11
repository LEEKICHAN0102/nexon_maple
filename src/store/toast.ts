import { create } from "zustand";

interface ToastProps {
  toastState: string | null;
  setToast: (message: string | null) => void;
}

const useToast = create<ToastProps>((set) => ({
  toastState: null,
  setToast: (message) => set({ toastState: message }),
}));

export default useToast;
